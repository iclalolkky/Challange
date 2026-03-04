# UI Challenge - Landing Page 

Bu proje, modern web geliştirme standartlarına uygun olarak **sıfır dış bağımlılık (zero-dependency)** prensibiyle geliştirilmiş bir UI Bileşen Kütüphanesi ve Açılış Sayfasıdır (Landing Page). 

Proje, herhangi bir JavaScript framework'ü (React, Vue vb.) kullanılmadan, tamamen mühendislik temellerine sadık kalınarak inşa edilmiştir.

## Öne Çıkan Özellikler

* **Vanilla TypeScript:** %100 tip güvenliği, arayüzler (interfaces) ve framework olmadan doğrudan, performanslı DOM manipülasyonu.
* **SCSS & BEM Mimarisi:** Stillerin çakışmasını önleyen BEM isimlendirme standartları ve tekrar kullanılabilir SCSS mixin/değişken yapıları.
* **Dinamik Tema (Dark/Light Mode):** CSS değişkenleri (`var(--)`) ve HTML root öznitelikleri ile anlık, yüksek performanslı tema geçişi.
* **Kusursuz Responsive Tasarım:** CSS Grid ve Flexbox kullanılarak mobil, tablet ve masaüstü ekranlara tam uyum sağlayan akıllı yerleşim planı.
* **Erişilebilirlik (a11y):** Klavye navigasyonu ve ekran okuyucular için özenle eklenmiş ARIA etiketleri (`role="dialog"`, `aria-expanded` vb.).

## Kullanılan Teknolojiler

* **HTML5** (Semantik yapı)
* **SCSS** (Gelişmiş stil yönetimi)
* **TypeScript** (Güvenli ve ölçeklenebilir mantık)
* **Vite** (Ultra hızlı derleme ve geliştirme sunucusu)

## Özel Bileşen Kütüphanesi

Proje içerisinde dışarıdan hazır alınmamış, tamamen sıfırdan kodlanmış şu modüler bileşenler bulunmaktadır:
- `Button`: Primary ve Outline varyantları.
- `Input`: Gizli label yönetimi ve form hizalamasıyla tam uyumlu girdi alanı.
- `Card`: Hover efektli, esnek bilgi kartları.
- `Modal`: Arka plan karartmalı (overlay), animasyonlu ve a11y uyumlu açılır pencere.
- `Accordion`: Dinamik yükseklik (grid-template-rows) animasyonlarıyla çalışan, genişleyebilir SSS listesi.

## Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda incelemek için aşağıdaki adımları izleyebilirsiniz:

1. Repoyu bilgisayarınıza klonlayın:

"git clone [https://github.com/iclalolkky/Challange.git](https://github.com/iclalolkky/Challange.git)"

2. Proje dizinine girin:

"cd Challange"

3. Gerekli paketleri (sadece Vite ve TypeScript derleyicisi için) yükleyin:

"npm install"

4. Geliştirme sunucusunu başlatın:

"npm run dev"

## Dökümantasyon

* Mimari kararlarımızın teknik detayları için [ADR-001](https://www.google.com/search?q=docs/adr-001.md) belgesini inceleyebilirsiniz.
* Projenin gelişim süreci ve sürüm notları için [CHANGELOG.md](CHANGELOG.md) dosyasına göz atabilirsiniz.

**Geliştirici:** İclal Olukkaya
