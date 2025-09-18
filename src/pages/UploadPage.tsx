import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AIAgentIndicator } from "@/components/AIAgentIndicator";
import { StatusBadge } from "@/components/StatusBadge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  CloudUpload, 
  FileImage, 
  CheckCircle, 
  Loader2,
  AlertCircle
} from "lucide-react";

export default function UploadPage() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const preprocessingSteps = [
    { name: "Denoising", status: isProcessing ? "processing" : "idle" },
    { name: "Normalizing", status: isProcessing ? "processing" : "idle" },
    { name: "Aligning", status: isProcessing ? "processing" : "idle" },
  ];

  const handleUpload = () => {
    setIsProcessing(true);
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setIsProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold text-primary">SAR Image Upload & Preprocessing</h1>
            <AIAgentIndicator 
              label="Preprocessing Bot" 
              status={isProcessing ? "processing" : "idle"} 
            />
          </div>
          <p className="text-muted-foreground">
            Upload your SAR satellite images for AI-powered change detection analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Interface */}
          <div className="dashboard-card">
            <h2 className="text-xl font-semibold text-primary mb-6">Upload SAR Images</h2>
            
            {/* Drag and Drop Zone */}
            <div className="border-2 border-dashed border-border hover:border-accent transition-colors rounded-lg p-12 text-center mb-6">
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-full bg-accent/10 p-4">
                  <Upload className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Drag & Drop SAR Images</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Support for .tif, .png, .jpg formats
                  </p>
                  <Button variant="outline" onClick={handleUpload}>
                    <FileImage className="mr-2 h-4 w-4" />
                    Browse Files
                  </Button>
                </div>
              </div>
            </div>

            {/* Cloud Import */}
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <CloudUpload className="h-5 w-5 text-accent" />
                <h3 className="font-semibold text-primary">Cloud Import</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Import directly from satellite data providers
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm">Sentinel-1</Button>
                <Button variant="outline" size="sm">COSMO-SkyMed</Button>
                <Button variant="outline" size="sm">TerraSAR-X</Button>
                <Button variant="outline" size="sm">ALOS PALSAR</Button>
              </div>
            </div>
          </div>

          {/* Preprocessing Status */}
          <div className="dashboard-card">
            <h2 className="text-xl font-semibold text-primary mb-6">Preprocessing Pipeline</h2>
            
            {/* Progress Bar */}
            {isProcessing && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">Processing...</span>
                  <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}

            {/* Preprocessing Steps */}
            <div className="space-y-4 mb-6">
              {preprocessingSteps.map((step, index) => (
                <div key={step.name} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="flex-shrink-0">
                    {isComplete ? (
                      <CheckCircle className="h-5 w-5 text-status-active" />
                    ) : isProcessing ? (
                      <Loader2 className="h-5 w-5 text-status-processing animate-spin" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-primary">{step.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {step.name === "Denoising" && "Removing noise and artifacts from SAR data"}
                      {step.name === "Normalizing" && "Standardizing pixel values and calibration"}
                      {step.name === "Aligning" && "Georeferencing and coordinate alignment"}
                    </p>
                  </div>
                  <StatusBadge 
                    status={isComplete ? "active" : "processing"} 
                    label={isComplete ? "Complete" : "Processing"} 
                  />
                </div>
              ))}
            </div>

            {/* Status Message */}
            {isComplete && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-status-active/10 border border-status-active/20">
                <CheckCircle className="h-5 w-5 text-status-active" />
                <div>
                  <p className="font-medium text-status-active">Preprocessing Complete</p>
                  <p className="text-sm text-status-active/80">Ready for change detection analysis</p>
                </div>
              </div>
            )}

            {!isProcessing && !isComplete && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted border">
                <AlertCircle className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Upload SAR images to begin preprocessing
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Next Steps */}
        {isComplete && (
          <div className="mt-8 dashboard-card">
            <h3 className="text-lg font-semibold text-primary mb-4">Ready for Analysis</h3>
            <div className="flex gap-4">
              <Button variant="hero" size="lg">
                <CheckCircle className="mr-2 h-4 w-4" />
                Start Change Detection
              </Button>
              <Button variant="outline" size="lg">
                View Timeline Analysis
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}