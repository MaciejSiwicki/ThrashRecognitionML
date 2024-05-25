"use client";
import TrashClassifier from "@/components/TrashClassifier";
import WebcamCapture from "@/components/WebcamCapture";
import { useState } from "react";

export default function Home() {
	const [capturedImage, setCapturedImage] = useState<string>("");

	const handleCapture = (dataUrl: string) => {
		setCapturedImage(dataUrl);
	};
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
			<h1 className="text-4xl font-bold mb-6">Trash Classifier</h1>
			<WebcamCapture onCapture={handleCapture} />
			{capturedImage && <TrashClassifier image={capturedImage} />}
		</div>
	);
}
