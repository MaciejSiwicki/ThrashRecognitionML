# Libraries
import tensorflow as tf
import matplotlib as mpl
import matplotlib.pyplot as plt


# Datasets :: prepare
#   *   *   *   *   *   *   *   *   *   *   #

IMAGE_SIZE = 48
BATCH_SIZE = 32

class_names = ['cardboard', 'glass', 'metal', 'other', 'paper', 'plastic']

( p_dataset,
  q_dataset, ) = tf.keras.utils.image_dataset_from_directory('./data/',
                    batch_size=(BATCH_SIZE),
                    image_size=(IMAGE_SIZE, IMAGE_SIZE),
                    seed=0,
                    subset='both',
                    validation_split=0.2)



# Datasets :: preview
#   *   *   *   *   *   *   *   *   *   *   #

plt.figure(figsize=(10, 10))

for images, labels in p_dataset.take(1):
    for i in range(9):
        ax = plt.subplot(3, 3, i + 1)
        plt.imshow(images[i].numpy().astype("uint8"))
        plt.title(labels[i].numpy())
        plt.axis("off")


# Model :: prepare
#   *   *   *   *   *   *   *   *   *   *   #

# define
model = tf.keras.models.Sequential([
    tf.keras.Input((IMAGE_SIZE, IMAGE_SIZE, 3)),
    
    # augumentation
    tf.keras.layers.RandomRotation(0.1),
    tf.keras.layers.RandomZoom(0.1),
    tf.keras.layers.RandomFlip(),
    
    # conv2 #1
    tf.keras.layers.Conv2D(24, (3, 3), activation='relu', padding='same'),
    tf.keras.layers.Conv2D(24, (3, 3), activation='relu'),
    tf.keras.layers.MaxPool2D((2, 2)),
    tf.keras.layers.Dropout(0.2),
    
    # conv2 #2
    tf.keras.layers.Conv2D(48, (3, 3), activation='relu', padding='same'),
    tf.keras.layers.Conv2D(48, (3, 3), activation='relu'),
    tf.keras.layers.MaxPool2D((2, 2)),
    tf.keras.layers.Dropout(0.2),
    
    tf.keras.layers.Flatten(),

    # dense #1
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.2),

    # output
    tf.keras.layers.Dense(10),
    tf.keras.layers.Softmax(),
])

# compile
model.compile(
    loss=tf.keras.losses.sparse_categorical_crossentropy,
    optimizer=tf.keras.optimizers.Adam(),
    metrics=['accuracy']
)

# preview
model.summary()


# Model :: train
#   *   *   *   *   *   *   *   *   *   *   #

model.fit(p_dataset, validation_data=q_dataset, epochs=25)


# Model :: save
#   *   *   *   *   *   *   *   *   *   *   #

model.save('ThrashRecognitionML.v1.py.keras')
