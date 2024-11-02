import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Globe2, ArrowRight, AlertCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to Search Console</h1>
        <p className="text-muted-foreground">
          Monitor, maintain, and troubleshoot your site's presence in Google Search results
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card className="p-6">
          <div className="flex items-start space-x-4">
            <Search className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold mb-2">URL Inspection</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Check how Google sees your pages
              </p>
              <div className="flex space-x-2">
                <Input placeholder="Enter URL to inspect" />
                <Button size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start space-x-4">
            <Globe2 className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold mb-2">Performance</h3>
              <p className="text-sm text-muted-foreground">
                Analyze your search traffic data
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Clicks</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total Impressions</span>
                  <span className="font-semibold">0</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-destructive" />
            <div>
              <h3 className="font-semibold mb-2">Coverage</h3>
              <p className="text-sm text-muted-foreground">
                Review indexing and sitemap status
              </p>
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  View Report
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Get Started</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-medium">1. Add your property</h3>
            <p className="text-sm text-muted-foreground">
              Verify ownership of your website
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">2. Submit your sitemap</h3>
            <p className="text-sm text-muted-foreground">
              Help Google discover your pages
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">3. Monitor performance</h3>
            <p className="text-sm text-muted-foreground">
              Track your search presence
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}