# Lista zakupów – jQuery DOM Manipulation

## Opis
Projekt przedstawia interaktywną listę zakupów stworzoną z użyciem jQuery.  
Umożliwia dodawanie, edytowanie, usuwanie, sortowanie, filtrowanie oraz przeciąganie elementów.  
Aplikacja demonstruje działanie najważniejszych metod manipulacji elementami DOM.

---

## Funkcje

### Dodawanie i usuwanie
- Dodawanie produktu na początek lub koniec listy (`prepend()`, `append()`)
- Usuwanie ostatniego elementu (`remove()`)
- Czyszczenie całej listy (`empty()`)
- Przywracanie listy do stanu początkowego (`html()`)

### Edycja elementów
- Kliknięcie w element zamienia go na pole input
- Zatwierdzanie zmiany klawiszem Enter
- Animacja `fadeOut()` → zmiana → `fadeIn()`
- Kliknięty element otrzymuje klasę `active`

### Operacje na strukturze DOM
- Automatyczne nadawanie klasy `list-group-item` nowym elementom
- Kolorowanie co drugiego elementu listy (selektor `:even`)
- Pobranie wszystkich elementów listy, ich sortowanie i ponowne wstawienie

### Drag & Drop (jQuery UI)
- Przeciąganie i zmiana kolejności elementów listy (`sortable()`)

### Filtrowanie
- Wyszukiwanie elementów zawierających wpisaną frazę
- Ukrywanie pozostałych za pomocą `toggle()`

---

## Użyte metody jQuery

### Manipulacja DOM
- `append()`
- `prepend()`
- `remove()`
- `empty()`
- `html()`
- `text()`
- `css()`
- `toggle()`

### Wyszukiwanie elementów
- `:even`
- `children()`
- `siblings()`

### Zdarzenia i animacje
- `click()`
- `keypress()`
- `fadeIn()`
- `fadeOut()`

### jQuery UI
- `sortable()`
- `disableSelection()`

---

## Technologie
- HTML5  
- CSS3  
- JavaScript  
- jQuery  
- jQuery UI

---

## Pliki w repozytorium
- `index.html`  
- `style.css`  
- `app.js`  
- `README.md`

---

## Autor
Projekt wykonany jako ćwiczenia z jQuery DOM Manipulation.

