# ThrashRecognitionML

## Projekt: Detekcja Typów Odpadów za Pomocą Konwolucyjnych Sieci Neuronowych

### Krok 1: Zebranie i Przygotowanie Danych

-   **Zebranie Zdjęć**: Zebranie zbioru zdjęć odpadów, oznaczenie ich odpowiednimi etykietami (np. papier, plastik, szkło, bio).
-   **Preprocessing Zdjęć**: Przetwarzanie wstępne zdjęć, takie jak zmiana rozmiaru, normalizacja, przycinanie, oraz augmentacja danych (jeśli to możliwe) w celu przygotowania zbioru treningowego, walidacyjnego i testowego.

### Krok 2: Budowa Modelu Uczenia Maszynowego

-   **Model ML**: Zbudowanie modelu klasyfikacji odpadów opartego na konwolucyjnych sieciach neuronowych (CNN). Wykorzystywanie narzędzi takich jak TensorFlow lub PyTorch do stworzenia i trenowania modelu.
-   **Ocena Modelu**: Po nauczeniu modelu, ocena jego wydajności na zbiorze testowym, sprawdzanie dokładności klasyfikacji.

### Krok 3: Implementacja Prostego Interfejsu Graficznego

-   **Interfejs Graficzny**: Implementacja prostego interfejsu graficznego, który będzie umożliwiał użytkownikowi korzystanie z kamery do robienia zdjęć. Wynik klasyfikacji będzie wyświetlany w interfejsie.

![Example photos](./README/trashnet_example.png)
