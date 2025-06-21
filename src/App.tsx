import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Team from "@/pages/team";
import GetInvolved from "@/pages/get-involved";
import Resources from "@/pages/resources";
import Interviews from "@/pages/interviews";
import Quiz from "@/pages/quiz";
import FAQ from "@/pages/faq";
import Privacy from "@/pages/privacy";
import Partnership from "@/pages/partnership";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/team" component={Team} />
          <Route path="/get-involved" component={GetInvolved} />
          <Route path="/resources" component={Resources} />
          <Route path="/interviews" component={Interviews} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/faq" component={FAQ} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/partnership" component={Partnership} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
