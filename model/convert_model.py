import tensorflow as tf
import tensorflowjs as tfjs

# Load your model
model = tf.keras.models.load_model("ThrashRecognitionML.v1.ipynb.keras")

# Save the model in TensorFlow.js format
tfjs.converters.save_keras_model(model, "./tfjs_model/")
