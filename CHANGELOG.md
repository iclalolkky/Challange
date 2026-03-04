# Changelog (Sürüm Notları)

Bu dosyada projeye ait tüm önemli değişiklikler tutulmaktadır.
Format, [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) standartlarına dayanmaktadır ve bu proje [Semantic Versioning](https://semver.org/spec/v2.0.0.html) kullanmaktadır.

## [1.0.0] - İlk Sürüm (Release)

### Eklendi (Added)
- **Footer Bölümü:** E-posta abonelik formu (Bülten) ve telif hakkı bilgilerini içeren, responsif alt bilgi alanı.
- **SSS (FAQ) Bölümü:** Kullanıcıların sıkça sorulan soruları görüntüleyebileceği interaktif alan.
- **Özellikler (Features) Bölümü:** Modüler yapıları sergileyen, 3'lü responsif CSS Grid yapısına sahip kart ızgarası.
- **Hero & Header:** Sitenin ana karşılama ekranı ve anında tepki veren **Dark Mode (Karanlık Tema)** değiştirici butonu.
- **Accordion Bileşeni:** Vanilla TS ile açma/kapama mantığı kurulan, pürüzsüz animasyonlu SSS kutuları.
- **Modal Bileşeni:** Erişilebilirlik (a11y) standartlarına uygun (`role="dialog"`), arka plan karartmalı (overlay) ve animasyonlu açılır pencere.
- **Card Bileşeni:** BEM metodolojisi ile stillendirilmiş, hover efektli esnek içerik kartları.
- **Input Bileşeni:** Dinamik etiket (label) yönetimi ve form doğrulama destekli girdi alanı.
- **Button Bileşeni:** TypeScript arayüzleriyle (interfaces) farklı varyantları (primary, outline) destekleyen buton yapısı.
- **SCSS Altyapısı:** Mobil öncelikli (mobile-first) geliştirme için `@mixin` ve breakpoint yapıları.
- **Proje İskeleti:** Vite ve Vanilla TypeScript tabanlı, sıfır bağımlılığa sahip (zero-dependency) modern geliştirme ortamı.

### Değiştirildi (Changed)
- Test metinleri (Lorem Ipsum), projenin teknik özelliklerini anlatan profesyonel ve teknik metinlerle değiştirildi.
- Footer form elemanlarının Flexbox hizalamaları (alignment) ve buton davranışları kusursuz hale getirildi.