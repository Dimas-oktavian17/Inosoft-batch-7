import { reactive, ref } from 'vue';
// that's data for navbar and footer components
export const navItem = reactive([
    {
        title: 'Home', style: 'nav-link text-light active', link: '#'
    },
    {
        title: 'Menu', style: 'nav-link text-light', link: '#menu'
    },
    {
        title: 'Checkout', style: 'nav-link text-light', link: '#checkout'
    },
])
// that's data for the menu item
export const ListMenu = reactive([
    {
        logo: 'game-icons:fast-noodles',
        title: 'Mie Gelas',
        deskripsi: 'Mie yang penuh cita rasa, harga terjangkau. Nostalgia.'
    },
    {
        logo: 'fluent-emoji-high-contrast:cut-of-meat',
        title: 'Daging Wagyu A5',
        deskripsi: `Jangan banya banyak, udah pasti enak. Sebaiknya jangan gegabah.`
    },
    {
        logo: 'bxs:coffee-bean',
        title: 'Kopikap',
        deskripsi: `Dari biji kopi pilihan, dan cita rasa yang berkualitas.
                    Meskipun kadang basi, pengalaman.`
    }
])
// that's data for cart item list
export const listMenu = ref([
    {
        logo: 'game-icons:fast-noodles',
        title: 'Mie Gelas',
        deskripsi: 'Mie yang penuh cita rasa, harga terjangkau. Nostalgia.',
        price: 3900,
        stok: 10,
        checkout: 'Add to cart',
        status: true
    },
    {
        logo: 'fluent-emoji-high-contrast:cut-of-meat',
        title: 'Daging Wagyu A5',
        deskripsi: `Jangan banya banyak, udah pasti enak. Sebaiknya jangan gegabah.`,
        price: 10000,
        stok: 80,
        checkout: 'Add to cart',
        status: true
    },
    {
        logo: 'bxs:coffee-bean',
        title: 'Kopikap',
        deskripsi: `Dari biji kopi pilihan, dan cita rasa yang berkualitas.
                    Meskipun kadang basi, pengalaman.`,
        price: 1500,
        stok: 3,
        checkout: 'Add to cart',
        status: true
    }
])
