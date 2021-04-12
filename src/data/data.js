const data = {
  PRODUCTS: [
    {
      id: 1,
      name: "Sendo",
      price: 22,
      ingredients: "Cangrejo, pescado blanco, queso crema, topping de langostino gratinado de queso y salsa de maracuyá, 10 piezas.",
      category: "sushi"
    },
    {
      id: 2,
      name: "Samurai",
      price: 17,
      ingredients: "Pescado blanco, aguacate, queso crema y topping de ajonjolí, 10 piezas.",
      category: "sushi"
    },
    {
      id: 3,
      name: "Kioto",
      price: 15,
      ingredients: "Cangrejo, vegetales, queso crema y topping de aguacate, 10 piezas.",
      category: "sushi"
    },
    {
      id: 4,
      name: "Fuji",
      price: 22,
      ingredients: "Tilapia apanada, aguacate y topping de langostinos rebozados, 10 piezas.",
      category: "sushi"
    },
    {
      id: 5,
      name: "Premier",
      price: 22,
      ingredients: "Cangrejo, queso crema, langostinos y topping de mango, 10 piezas.",
      category: "sushi"
    },
    {
      id: 6,
      name: "Benji",
      price: 15,
      ingredients: "Espárragos, vegetales, aguacate y topping de mango, 10 piezas.",
      category: "sushi"
    },
    {
      id: 7,
      name: "Rainbow",
      price: 22,
      ingredients: "Cangrejo, pepino, aguacate, topping de pescado y massago, 10 piezas.",
      category: "sushi"
    },
    {
      id: 8,
      name: "Alaska",
      price: 21,
      ingredients: "Salmón, aguacate, queso crema, topping de salmón y guacame, 10 piezas.",
      category: "sushi"
    },
    {
      id: 9,
      name: "Tuna Roll",
      price: 18,
      ingredients: "Langostino, aguacate, queso crema, topping de atún, 10 piezas.",
      category: "sushi"
    },
    {
      id: 10,
      name: "California Roll",
      price: 17,
      ingredients: "Cangrejo, pepino, aguacate, topping de massago y ajonjolí, 10 piezas.",
      category: "sushi"
    },
    {
      id: 11,
      name: "Ojo de tigre",
      price: 26,
      ingredients: "Cangrejo, atún, salmón, aguacate, queso crema, topping de massago y ajonjolí, 10 piezas.",
      category: "sushi"
    },
    {
      id: 12,
      name: "Ceviche",
      price: 22,
      ingredients: "Cangrejo, aguacate, queso crema y topping de ceviche, 10 piezas.",
      category: "sushi"
    },
    {
      id: 13,
      name: "Tokio",
      price: 21,
      ingredients: "Salmón apanado, langostinos, aguacate y queso crema, 12 piezas.",
      category: "tempura"
    },
    {
      id: 14,
      name: "Tiger",
      price: 20,
      ingredients: "Cangrejo, espárragos, aguacate y queso crema, 12 piezas.",
      category: "tempura"
    },
    {
      id: 15,
      name: "Coco Bongo",
      price: 25,
      ingredients: "Langostinos tempurizados con coco, aguacate y queso crema ¡Todo apanado en cereal!, 12 piezas.",
      category: "tempura"
    },
    {
      id: 16,
      name: "Rock and Roll",
      price: 20,
      ingredients: "Pescado blanco, vegetales y aguacate, 12 piezas.",
      category: "tempura"
    },
    {
      id: 17,
      name: "Sensei",
      price: 24,
      ingredients: "Salmón, atún, pescado blanco y queso crema, 12 piezas.",
      category: "tempura"
    },
    // {
    //   id: 18,
    //   name: "Tropical",
    //   price: 18,
    //   ingredients: "Plátano maduro queso crema y cangrejo, 12 piezas.",
    //   category: "tempura"
    // },
    {
      id: 19,
      name: "20 piezas",
      price: 40,
      ingredients: "2 rolls. Máximo 1 de la categoría tempurizado",
      category: "combos",
      subitems: [
        {
          id: 1,
          name: 'Sushi 10 Makis',
          options: [
            {
              id: 1,
              name: 'Sendo'
            },
            {
              id: 2,
              name: 'Samurai'
            },
            {
              id: 3,
              name: 'Kioto'
            },
            {
              id: 4,
              name: 'Fuji'
            },
            {
              id: 5,
              name: 'Premier'
            },
            {
              id: 6,
              name: 'Benji'
            },
            {
              id: 7,
              name: 'Rainbow'
            },
            {
              id: 8,
              name: 'Alaska'
            },
            {
              id: 9,
              name: 'Tuna Roll'
            },
            {
              id: 10,
              name: 'California Roll'
            },
            {
              id: 11,
              name: 'Ojo de tigre'
            },
            {
              id: 12,
              name: 'Ceviche'
            }
          ]
        },
        {
          id: 2,
          name: 'Sushi Tempura',
          options: [
            {
              id: 1,
              name: 'Tokio'
            },
            {
              id: 2,
              name: 'Tiger'
            },
            {
              id: 3,
              name: 'Coco Bongo'
            },
            {
              id: 4,
              name: 'Rock and Roll'
            },
            {
              id: 5,
              name: 'Sensei'
            }
          ]
        }
      ]
    },
    {
      id: 20,
      name: "30 piezas",
      price: 60,
      ingredients: "3 Roll. Máximo 1 de la categoría tempurizado. Máximo 2 rolls iguales",
      category: "combos"
    },
    // {
    //   id: 21,
    //   name: "Ceviche sendo",
    //   price: 20,
    //   ingredients: "Camarón, pescado blanco, pulpo, cebolla morada, leche de tigre, pimentón, mango viche y apio.",
    //   category: "ceviche"
    // },
    {
      id: 22,
      name: "Base de vegetales",
      price: 16.9,
      ingredients: "Cebolla, zanahoria, zuquini, pimentón, y raices chinas. Elige un carbohidrato y una proteína.",
      category: "wok",
      subitems: [
        {
          id: 1,
          name: 'Carbohidrato',
          options: [
            {
              id: 1,
              name: 'Arroz'
            },
            {
              id: 2,
              name: 'Pasta de arroz'
            },
            {
              id: 3,
              name: 'Pasta de huevo'
            }
          ]
        },
        {
          id: 2,
          name: 'Proteína',
          options: [
            {
              id: 1,
              name: 'Res'
            },
            {
              id: 2,
              name: 'Pollo'
            },
            {
              id: 3,
              name: 'Cerdo'
            },
            {
              id: 4,
              name: 'Mix (Res, pollo y cerdo)'
            }
          ]
        }
      ]
    },
    {
      id: 23,
      name: "Frutos del mar",
      price: 24,
      ingredients: "Pescado blanco, camarón, pulpo, calamar y cangrejo.",
      category: "wok"
    },
    // {
    //   id: 24,
    //   name: "Arroz teriyaki familiar",
    //   price: 38,
    //   ingredients: "Calamar, camarón, pollo, maiz tierno, cebollín, zanahoria y pescado blanco apanado. 4 personas.",
    //   category: "wok"
    // },
    {
      id: 25,
      name: "Té hatsu",
      price: 5,
      category: "bebidas"
    },
    {
      id: 26,
      name: "Coca-cola 400 ml",
      price: 2.5,
      category: "bebidas"
    },
    // {
    //   id: 27,
    //   name: "Limonada natural",
    //   price: 4,
    //   category: "bebidas"
    // },
    // {
    //   id: 28,
    //   name: "Limonada de Hierbabuena",
    //   price: 5,
    //   category: "bebidas"
    // },
    // {
    //   id: 29,
    //   name: "Limonada de Cereza",
    //   price: 5,
    //   category: "bebidas"
    // },
    // {
    //   id: 30,
    //   name: "Jugo natural en agua",
    //   price: 4,
    //   category: "bebidas"
    // },
    // {
    //   id: 31,
    //   name: "Jugo natural en leche",
    //   price: 5,
    //   category: "bebidas"
    // },
  ]
};

export default data;
