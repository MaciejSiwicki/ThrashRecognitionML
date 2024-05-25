"use client";
import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";

interface TrashClassifierProps {
	image: string;
}

const TrashClassifier: React.FC<TrashClassifierProps> = ({ image }) => {
	const [model, setModel] = useState<tf.LayersModel | null>(null);
	const [prediction, setPrediction] = useState<string>("");

	useEffect(() => {
		const loadModel = async () => {
			const loadedModel = await tf.loadLayersModel(
				"/tfjs_model/model.json"
			);
			setModel(loadedModel);
		};
		loadModel();
	}, []);

	useEffect(() => {
		if (model && image) {
			const classifyImage = async () => {
				const img = new Image();
				img.src = image;
				img.onload = () => {
					const tensor = tf.browser
						.fromPixels(img)
						.resizeNearestNeighbor([224, 224])
						.toFloat()
						.expandDims();
					const predictions = model.predict(tensor) as tf.Tensor;
					const classNames = [
						"plastic",
						"paper",
						"glass",
						"other",
						"cardboard",
					];
					const predictedIndex = predictions.argMax(-1).dataSync()[0];
					setPrediction(classNames[predictedIndex]);
				};
			};
			classifyImage();
		}
	}, [model, image]);

	return (
		<div className="mt-4 text-center">
			{image && (
				<img
					src={image}
					alt="captured"
					className="max-w-full mx-auto rounded border"
				/>
			)}
			<p className="mt-4 text-xl">
				{prediction ? `Prediction: ${prediction}` : "No prediction yet"}
			</p>
			{!model && <div className="mt-4">Loading model...</div>}
		</div>
	);
};

export default TrashClassifier;
