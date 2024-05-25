"use client";
import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";

interface WebcamCaptureProps {
	onCapture: (dataUrl: string) => void;
}

const WebcamCapture: React.FC<WebcamCaptureProps> = ({ onCapture }) => {
	const webcamRef = useRef<Webcam>(null);

	const capture = useCallback(() => {
		if (webcamRef.current) {
			const imageSrc = webcamRef.current.getScreenshot();
			if (imageSrc) {
				onCapture(imageSrc);
			}
		}
	}, [webcamRef, onCapture]);

	return (
		<div className="flex flex-col items-center mt-4">
			<Webcam
				audio={false}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				className="border rounded"
				width={640}
				height={480}
			/>
			<div className="mt-4 flex space-x-2">
				<Button
					onClick={capture}
					className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
				>
					Capture
				</Button>
			</div>
		</div>
	);
};

export default WebcamCapture;
