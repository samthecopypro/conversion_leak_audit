import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Download, Loader2, AlertCircle } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

export default function AdminDashboard() {
  const { user, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();

  // Redirect if not admin
  useEffect(() => {
    if (!authLoading && (!user || user.role !== "admin")) {
      setLocation("/");
      toast.error("Access denied. Admin only.");
    }
  }, [user, authLoading, setLocation]);

  // Fetch leads from admin endpoint
  const { data: leads, isLoading, error } = trpc.leads.getAllAdmin.useQuery(undefined, {
    enabled: user?.role === "admin",
  });

  const handleExportCSV = () => {
    if (!leads || leads.length === 0) {
      toast.error("No leads to export");
      return;
    }

    // Create CSV content
    const headers = ["Email", "Submitted At"];
    const rows = leads.map((lead) => [
      lead.email,
      new Date(lead.submittedAt).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", `leads-${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success(`Exported ${leads.length} leads`);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8" />
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage and export all submitted leads</p>
        </div>

        {/* Stats Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Leads Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Leads</p>
                <p className="text-3xl font-bold">{leads?.length || 0}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Latest Submission</p>
                <p className="text-lg font-semibold">
                  {leads && leads.length > 0
                    ? new Date(leads[leads.length - 1].submittedAt).toLocaleDateString()
                    : "—"}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Status</p>
                <p className="text-lg font-semibold text-green-600">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export Button */}
        <div className="mb-6">
          <Button
            onClick={handleExportCSV}
            disabled={isLoading || !leads || leads.length === 0}
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            Export as CSV
          </Button>
        </div>

        {/* Error State */}
        {error && (
          <Card className="mb-6 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 text-red-700">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p>Failed to load leads. Please try again.</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Leads Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Leads</CardTitle>
            <CardDescription>
              {leads && leads.length > 0
                ? `Showing ${leads.length} lead${leads.length !== 1 ? "s" : ""}`
                : "No leads yet"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
              </div>
            ) : leads && leads.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-sm">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">Submitted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead, idx) => (
                      <tr key={idx} className="border-b hover:bg-muted/50 transition-colors">
                        <td className="py-3 px-4 text-sm">{lead.email}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">
                          {new Date(lead.submittedAt).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No leads submitted yet</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
