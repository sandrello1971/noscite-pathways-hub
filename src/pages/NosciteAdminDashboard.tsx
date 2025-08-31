import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { BlogPost, Document } from "@/types/database";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  PlusCircle, 
  FileText, 
  Upload, 
  Eye, 
  Edit, 
  Trash2,
  Calendar,
  Users,
  Shield,
  AlertTriangle,
  LogOut,
  ArrowLeft
} from "lucide-react";
import BlogEditor from "@/components/BlogEditor";
import DocumentManager from "@/components/DocumentManager";
import UserManager from "@/components/UserManager";

export default function NosciteAdminDashboard() {
  const { user, loading: authLoading, isAdmin, signOut } = useAuth();
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [showBlogEditor, setShowBlogEditor] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    console.log('Dashboard useEffect:', { authLoading, user: !!user, userRole: isAdmin() });
    
    if (!authLoading) {
      if (!user) {
        console.log('No user, redirecting to auth');
        toast({
          title: "Autenticazione Richiesta",
          description: "Effettua l'accesso per accedere all'area amministrazione.",
          variant: "destructive",
        });
        navigate("/nosciteadmin/auth");
        return;
      }
      
      if (!isAdmin()) {
        console.log('User is not admin, redirecting to home');
        toast({
          title: "Accesso Negato",
          description: "Non hai i permessi per accedere all'area amministrazione.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }
      
      console.log('User is admin, loading dashboard data');
      loadBlogPosts();
      loadDocuments();
      setLoading(false);
    }
  }, [user, authLoading, isAdmin, navigate, toast]);

  const loadBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (error) {
      console.error('Error loading blog posts:', error);
      toast({
        title: "Errore",
        description: "Impossibile caricare gli articoli del blog",
        variant: "destructive",
      });
    }
  };

  const loadDocuments = async () => {
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDocuments(data || []);
    } catch (error) {
      console.error('Error loading documents:', error);
      toast({
        title: "Errore",
        description: "Impossibile caricare i documenti",
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('Sei sicuro di voler eliminare questo articolo?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Articolo eliminato",
        description: "L'articolo è stato eliminato con successo",
      });
      
      loadBlogPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: "Errore",
        description: "Impossibile eliminare l'articolo",
        variant: "destructive",
      });
    }
  };

  const handleTogglePublish = async (post: BlogPost) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({
          published: !post.published,
          published_at: !post.published ? new Date().toISOString() : null
        })
        .eq('id', post.id);

      if (error) throw error;
      
      toast({
        title: post.published ? "Articolo nascosto" : "Articolo pubblicato",
        description: post.published 
          ? "L'articolo non è più visibile pubblicamente" 
          : "L'articolo è ora visibile pubblicamente",
      });
      
      loadBlogPosts();
    } catch (error) {
      console.error('Error updating post:', error);
      toast({
        title: "Errore",
        description: "Impossibile aggiornare lo stato dell'articolo",
        variant: "destructive",
      });
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Caricamento area amministrazione...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span>Autenticazione Richiesta</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <AlertDescription>
                Effettua l'accesso per accedere all'area amministrazione.
              </AlertDescription>
            </Alert>
            <div className="mt-4 space-y-2">
              <Button className="w-full" asChild>
                <Link to="/nosciteadmin/auth">Accedi</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/">Torna al Sito</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAdmin()) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-destructive" />
              <span>Accesso Negato</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert variant="destructive">
              <AlertDescription>
                Non hai i permessi per accedere all'area amministrazione. Contatta un amministratore.
              </AlertDescription>
            </Alert>
            <div className="mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/">Torna al Sito</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showBlogEditor) {
    return (
      <BlogEditor
        post={editingPost}
        onSave={() => {
          setShowBlogEditor(false);
          setEditingPost(null);
          loadBlogPosts();
        }}
        onCancel={() => {
          setShowBlogEditor(false);
          setEditingPost(null);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/b5b25fd0-a304-47db-ada5-41413f8c2da0.png" 
                alt="Noscite Logo" 
                className="h-8 w-auto"
              />
              <h1 className="text-xl font-bold">Noscite Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                {user?.email}
              </span>
              <Button variant="outline" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Sito
                </Link>
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Esci
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <Tabs defaultValue="blog" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="blog">Gestione Blog</TabsTrigger>
            <TabsTrigger value="documents">Gestione Documenti</TabsTrigger>
            <TabsTrigger value="users">Gestione Utenti</TabsTrigger>
          </TabsList>

          {/* Blog Management */}
          <TabsContent value="blog" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Articoli del Blog</h2>
              <Button 
                onClick={() => setShowBlogEditor(true)}
                className="flex items-center space-x-2"
              >
                <PlusCircle className="h-4 w-4" />
                <span>Nuovo Articolo</span>
              </Button>
            </div>

            <div className="grid gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.created_at || '').toLocaleDateString()}</span>
                          </div>
                          <Badge variant={post.published ? "default" : "secondary"}>
                            {post.published ? "Pubblicato" : "Bozza"}
                          </Badge>
                          {post.category && (
                            <Badge variant="outline">{post.category}</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setEditingPost(post);
                            setShowBlogEditor(true);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleTogglePublish(post)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeletePost(post.id!)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
              
              {blogPosts.length === 0 && (
                <Card>
                  <CardContent className="text-center py-12">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Nessun articolo</h3>
                    <p className="text-muted-foreground mb-4">
                      Non ci sono ancora articoli nel blog. Creane uno!
                    </p>
                    <Button onClick={() => setShowBlogEditor(true)}>
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Crea Primo Articolo
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Documents Management */}
          <TabsContent value="documents" className="space-y-6">
            <DocumentManager onDocumentChange={loadDocuments} />
          </TabsContent>

          {/* Users Management */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Gestione Utenti</h2>
            </div>
            <UserManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}