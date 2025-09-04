"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Bell,
  Calendar,
  Clock,
  Download,
  FileText,
  ImageIcon,
  AlertCircle,
  Info,
  CheckCircle,
  X,
  Eye
} from "lucide-react";

interface NotificationDocument {
  name: string;
  type: "pdf" | "image";
  url: string;
  size: string;
}

interface Notification {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  category: string;
  priority: "high" | "medium" | "low";
  documents: NotificationDocument[];
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [previewDocument, setPreviewDocument] = useState<NotificationDocument | null>(null);

  useEffect(() => {
    fetch("/jsons/notifications.json")
      .then((response) => response.json())
      .then((data) => {
        setNotifications(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
        setLoading(false);
      });
  }, []);

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      case "medium":
        return <Info className="w-5 h-5 text-orange-500" />;
      case "low":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      default:
        return <Bell className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive";
      case "medium":
        return "bg-orange-100 text-orange-700";
      case "low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const formatDate = (dateString: string, timeString: string) => {
    const date = new Date(`${dateString}T${timeString}`);
    return {
      date: date.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      time: date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  };

  const handleDocumentPreview = (document: NotificationDocument) => {
    if (document.type === "image") {
      setPreviewDocument(document);
    }
  };

  const handleDocumentDownload = (doc: NotificationDocument) => {
    // Create a temporary link element and trigger download
    const link = window.document.createElement("a");
    link.href = doc.url;
    link.download = doc.name;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="h-8 bg-muted rounded w-48 animate-pulse"></div>
            <div className="h-4 bg-muted rounded w-64 mt-2 animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border rounded-lg p-6 bg-card">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-5 h-5 bg-muted rounded animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-muted rounded w-3/4 animate-pulse"></div>
                    <div className="h-3 bg-muted rounded w-1/2 mt-2 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-muted rounded animate-pulse"></div>
                  <div className="h-4 bg-muted rounded w-5/6 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner Section */}
      <div 
        className="relative h-[30vh] bg-cover bg-center"
        style={{ backgroundImage: `url(/jsons/carousel/h1.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-start">
          <div className="mb-6">
            <Bell className="w-8 h-8 sm:w-12 sm:h-12 text-white mb-4" />
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Notifications
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl">
              Stay updated with important announcements, documents, and notices from Lyceum International School
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8">
        {/* Clean Notifications List */}
        <div className="space-y-3 sm:space-y-4">
          {notifications.map((notification) => {
            const { date, time } = formatDate(notification.date, notification.time);
            
            return (
              <div
                key={notification.id}
                className="border-2 rounded-4xl p-4 sm:p-5 md:p-6 bg-secondary transition-colors"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-3 sm:gap-0">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base sm:text-lg leading-tight mb-1">
                        {notification.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          {date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          {time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityBadge(notification.priority)}`}>
                      {notification.priority}
                    </span>
                    <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                      {notification.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {notification.description}
                </p>

                {/* Documents - Horizontal Slider */}
                {notification.documents && notification.documents.length > 0 && (
                  <div className="border-t pt-3 sm:pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {notification.documents.length} attachment{notification.documents.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    
                    {/* Horizontal scrolling container */}
                    <div className="overflow-x-auto scrollbar-hide">
                      <div className="flex gap-3 pb-2 min-w-max">
                        {notification.documents.map((document, index) => (
                          <div
                            key={index}
                            className={`flex-shrink-0 w-72 sm:w-80 flex items-center justify-between p-3 rounded-xl ${
                              document.type === "pdf" ? "bg-red-50 border border-red-200" : "bg-blue-50 border border-blue-200"
                            } transition-colors`}
                          >
                            <div className="flex items-center gap-3 min-w-0 flex-1">
                              <div className={`p-2 rounded-lg ${document.type === "pdf" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}>
                                {document.type === "pdf" ? (
                                  <FileText className="w-4 h-4" />
                                ) : (
                                  <ImageIcon className="w-4 h-4" />
                                )}
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="font-medium text-sm truncate">
                                  {document.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {document.type.toUpperCase()} • {document.size}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 shrink-0 ml-2">
                              {document.type === "image" && (
                                <button
                                  onClick={() => handleDocumentPreview(document)}
                                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                                  title="Preview"
                                >
                                  <Eye className="w-3 h-3" />
                                </button>
                              )}
                              <button
                                onClick={() => handleDocumentDownload(document)}
                                className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                                title="Download"
                              >
                                <Download className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {notifications.length === 0 && !loading && (
          <div className="text-center py-12">
            <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No notifications</h3>
            <p className="text-muted-foreground">
              New announcements will appear here when available.
            </p>
          </div>
        )}
      </div>

      {/* Clean Image Preview Modal */}
      {previewDocument && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setPreviewDocument(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-card border rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={() => setPreviewDocument(null)}
              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-8 h-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            >
              <X className="w-4 h-4" />
            </button>
            
            {/* Header */}
            <div className="p-4 border-b">
              <h3 className="font-semibold truncate pr-12">{previewDocument.name}</h3>
              <p className="text-sm text-muted-foreground">{previewDocument.type.toUpperCase()} • {previewDocument.size}</p>
            </div>
            
            {/* Image */}
            <div className="relative w-full h-[60vh]">
              <Image
                src={previewDocument.url}
                alt={previewDocument.name}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t bg-muted/30">
              <button
                onClick={() => handleDocumentDownload(previewDocument)}
                className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium w-full"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
