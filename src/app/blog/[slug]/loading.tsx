import React from 'react';

export default function Loading() {
    return (
        <article className="min-h-screen pt-32 pb-24 px-6 bg-white">
            <div className="max-w-3xl mx-auto animate-pulse max-w-[65ch]">

                {/* Breadcrumb / Back Link Skeleton */}
                <div className="h-6 w-32 bg-gray-100 rounded mb-12" />

                {/* Title Skeleton */}
                <div className="space-y-4 mb-8">
                    <div className="h-10 w-full bg-gray-100 rounded-lg" />
                    <div className="h-10 w-3/4 bg-gray-100 rounded-lg" />
                </div>

                {/* Metadata Skeleton (Avatar + Date) */}
                <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-8">
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div className="space-y-2">
                        <div className="h-4 w-24 bg-gray-100 rounded" />
                        <div className="h-3 w-16 bg-gray-50 rounded" />
                    </div>
                </div>

                {/* Main Image Skeleton */}
                <div className="w-full aspect-video bg-gray-100 rounded-2xl mb-12" />

                {/* Content Body Skeleton */}
                <div className="space-y-6">
                    <div className="h-4 w-full bg-gray-50 rounded" />
                    <div className="h-4 w-5/6 bg-gray-50 rounded" />
                    <div className="h-4 w-full bg-gray-50 rounded" />
                    <div className="h-32 w-full bg-gray-50 rounded my-8" />
                    <div className="h-4 w-4/5 bg-gray-50 rounded" />
                    <div className="h-4 w-full bg-gray-50 rounded" />
                </div>
            </div>
        </article>
    );
}
