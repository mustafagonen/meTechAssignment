import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ModulesService {
    public menuList = [
        {
            index: 0,
            imgUrl: "assets/atıştırmalık.png",
        },
        {
            index: 1,
            imgUrl: "assets/içecekler.png",
            isSelected: true,
        },
        {
            index: 2,
            imgUrl: "assets/gofret.png",
        },
        {
            index: 3,
            imgUrl: "assets/dondurma.png",
        },
        {
            index: 4,
            imgUrl: "assets/çikolata.png",
        },
        {
            index: 5,
            imgUrl: "assets/kahve.png",
        },
        {
            index: 6,
            imgUrl: "assets/tümü.png",
        }
    ];

    public productListTop = [
        {
            index: 0,
            imgUrl: "assets/nutella-product.png",
        },
        {
            index: 1,
            imgUrl: "assets/raf-product.png",
            isSelected: true,
        },
        {
            index: 2,
            imgUrl: "assets/ferrero-product.png",
        },
        {
            index: 3,
            imgUrl: "assets/redbull-product.png",
        },
    ];

    public productListBottom = [
        {
            index: 0,
            imgUrl: "assets/kinder-product.png",
        },
        {
            index: 1,
            imgUrl: "assets/mon-product.png",
            isSelected: true,
        },
        {
            index: 2,
            imgUrl: "assets/tic-product.png",
        },
        {
            index: 3,
            imgUrl: "assets/duplo-product.png",
        },
    ];

    public productListBottom2 = [
        {
            index: 0,
            imgUrl: "assets/nutella-product.png",
        },
        {
            index: 1,
            imgUrl: "assets/raf-product.png",
            isSelected: true,
        },
        {
            index: 2,
            imgUrl: "assets/ferrero-product.png",
        },
        {
            index: 3,
            imgUrl: "assets/redbull-product.png",
        },
    ];

    public productListTop2 = [
        {
            index: 0,
            imgUrl: "assets/kinder-product.png",
        },
        {
            index: 1,
            imgUrl: "assets/mon-product.png",
            isSelected: true,
        },
        {
            index: 2,
            imgUrl: "assets/tic-product.png",
        },
        {
            index: 3,
            imgUrl: "assets/duplo-product.png",
        },
    ];

    public logoList = [
        {
            index: 0,
            imgUrl: "assets/hanuto-logo.png",
            isSelected: false,
        },
        {
            index: 1,
            imgUrl: "assets/ferrero-logo.png",
            isSelected: true,
        },
        {
            index: 2,
            imgUrl: "assets/caprisun-logo.png",
            isSelected: false,
        },
        {
            index: 3,
            imgUrl: "assets/ferrero-kusschen-logo.png",
            isSelected: false,
        },
        {
            index: 4,
            imgUrl: "assets/giotto-logo.png",
            isSelected: false,
        },
        {
            index: 5,
            imgUrl: "assets/redbull-logo.png",
            isSelected: false,
        },
        {
            index: 6,
            imgUrl: "assets/kinder-logo.png",
            isSelected: false,
        },
        {
            index: 7,
            imgUrl: "assets/duplo-logo.png",
            isSelected: false,
        },
        {
            index: 8,
            imgUrl: "assets/toacker-logo.png",
            isSelected: false,
        },
        {
            index: 0,
            imgUrl: "assets/hanuto-logo.png",
            isSelected: false,
        },
        {
            index: 1,
            imgUrl: "assets/ferrero-logo.png",
            isSelected: true,
        },
        {
            index: 2,
            imgUrl: "assets/caprisun-logo.png",
            isSelected: false,
        },
        {
            index: 3,
            imgUrl: "assets/ferrero-kusschen-logo.png",
            isSelected: false,
        },
        {
            index: 4,
            imgUrl: "assets/giotto-logo.png",
            isSelected: false,
        },
        {
            index: 5,
            imgUrl: "assets/redbull-logo.png",
            isSelected: false,
        },
        {
            index: 6,
            imgUrl: "assets/kinder-logo.png",
            isSelected: false,
        },
        {
            index: 7,
            imgUrl: "assets/duplo-logo.png",
            isSelected: false,
        },
        {
            index: 8,
            imgUrl: "assets/toacker-logo.png",
            isSelected: false,
        }
    ];

    public progressList = [
        {
            index: 0,
            imgUrl: "assets/progress-1.png",
            text: "Ürünü Sepete Ekle",
        },
        {
            index: 1,
            imgUrl: "assets/progress-2.png",
            text: "Konteyner Tipi Seç",
        },
        {
            index: 2,
            imgUrl: "assets/progress-3.png",
            text: "Konteynere Biraz Daha Ürün Ekle",
        },
        {
            index: 3,
            imgUrl: "assets/progress-5.png",
            text: "Alışveriş İsteğini Gönder",
        },
        {
            index: 4,
            imgUrl: "assets/progress-4.png",
            text: "Ek Hizmet Seçimi Yap",
        },

        {
            index: 5,
            imgUrl: "assets/progress-6.png",
            text: "Sizinle İletişime Geçelim",
        }
    ];

    public advertisementList = [
        {
            index: 0,
            imgUrl: "assets/adv-1.png",
            title: "30'dan Fazla Marka",
            content: "Greyfood aracılı ile prestijli markalar boş raflarınızda yerini alsın!",
        },
        {
            index: 1,
            imgUrl: "assets/adv-2.png",
            title: "Avantajlı Fiyatlar",
            content: "Dünya markalarının en iyi ürünleri kaliteli ve avantajlı fiyatlarla raflarınızda!",
        },
        {
            index: 2,
            imgUrl: "assets/adv-3.png",
            title: "Profesyonel Dağıtım",
            content: "Ürünlerimizi araçlara sığdığı kadar değil, üreticinin kapasitesi kadar sunuyoruz.",
        },
        {
            index: 3,
            imgUrl: "assets/adv-4.png",
            title: "7/24 Destek",
            content: "Satış öncesi ve sonrası tüm süreçlerde, kişisel müşteri desteği sağlıyoruz",
        }
    ];

    public footerListLeft = [

        {
            index: 0,
            title: "Greyfood",
        },
        {
            index: 1,
            title: "Kurumsal",
        },
        {
            index: 2,
            title: "Blog",
        },
        {
            index: 3,
            title: "Katalog",
        },
        {
            index: 4,
            title: "İletişim",
        }
    ];

    public footerListRight = [

        {
            index: 0,
            title: "Yardım",
        },
        {
            index: 1,
            title: "Teslimat Bilgileri",
        },
        {
            index: 2,
            title: "Gizlilik ve Güvenlik",
        },
        {
            index: 3,
            title: "Sıkça Sorulan Sorular",
        },
        {
            index: 4,
            title: "İptal ve İade Koşullar",
        }
    ];

}

