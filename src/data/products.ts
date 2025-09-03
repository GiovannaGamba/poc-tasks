export async function getProducts() {
await new Promise(resolve => setTimeout(resolve, 1000));

     return [
        { id: 1, name: "Notebook Dell", price: 3500.00 },
        { id: 2, name: "iPhone 14", price: 6200.00 },
        { id: 3, name: "Smart TV Samsung 55\"", price: 2800.00 },
        { id: 4, name: "Mouse Logitech", price: 120.00 },
        { id: 5, name: "Teclado Mecânico Redragon", price: 350.00 },
        { id: 6, name: "Fone Bluetooth JBL", price: 450.00 },
        { id: 7, name: "Cadeira Gamer", price: 980.00 },
        { id: 8, name: "Monitor LG 27\"", price: 1600.00 },
        { id: 9, name: "Console PlayStation 5", price: 4800.00 },
        { id: 10, name: "Kindle Paperwhite", price: 600.00 },
        { id: 11, name: "Tablet Samsung Galaxy", price: 1300.00 },
        { id: 12, name: "Caixa de Som Alexa", price: 400.00 },
        { id: 13, name: "HD Externo 2TB", price: 420.00 },
        { id: 14, name: "SSD NVMe 1TB", price: 700.00 },
        { id: 15, name: "Placa de Vídeo RTX 3060", price: 2500.00 },
        { id: 16, name: "Impressora Multifuncional", price: 850.00 },
        { id: 17, name: "Ar-Condicionado Split", price: 2200.00 },
        { id: 18, name: "Geladeira Brastemp", price: 3900.00 },
        { id: 19, name: "Micro-ondas Panasonic", price: 600.00 },
        { id: 20, name: "Máquina de Lavar Samsung", price: 2800.00 }
      ];
      
}

interface CreateProductRequest {
    name: string;
    price: number;
}

export async function createProduct(data: CreateProductRequest) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return
}