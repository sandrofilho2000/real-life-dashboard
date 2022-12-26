import { legacy_createStore as createStore } from "redux";


const INITIAL_STATE = {
    menuToggle: true,
    themeOpen: false,
    currTheme: 'theme-mode-dark',
    currColor: 'cyan',
    categoryActive: 'batata-frita',
    productsNcategory: {
        categories: [
            {
                id: 1221133,
                name: "Batata Frita",
                slug: "batata-frita",
                img: "https://a-static.mlcdn.com.br/800x560/caixa-embalagem-de-batata-frita-vermelha-pequena-200-unidade-embalapack/asprepresentacoes/14006765008/e95ff4cdfea34adb19026c341c149a03.jpg",
                position: 0,
                products: [
                    {
                        name: 'Batata Frita',
                        id: 1,
                        categoryId: 1221133,
                        sizes: [
                            {
                                name: "Pequena",
                                price: "12"
                            },
                            {
                                name: "Média",
                                price: "14"
                            },
                            {
                                name: "Grande",
                                price: "16"
                            }
                        ],
                        ingredients: [
                        ],
                        img: 'https://a-static.mlcdn.com.br/800x560/caixa-embalagem-de-batata-frita-vermelha-pequena-200-unidade-embalapack/asprepresentacoes/14006765008/e95ff4cdfea34adb19026c341c149a03.jpg',
                        sideDishesCat: []
                    }
                ],
                sideDishes: [],
                fixedSizes: [
                    "Pequena",
                    "Média",
                    "Grande",
                ],
                fixedIngredients: [
                ]
            },
            {
                id: 10198,
                name: "Hamburguer",
                slug: "hamburguer",
                img: "https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2022/05/origem-do-hambuguer-cnn4.jpg?w=876&h=484&crop=1",
                position: 1,
                products: [
                    {
                        name: 'X-Tudo',
                        id: 32453,
                        categoryId: 10198,
                        sizes: [
                            {
                                name: "Individual",
                                price: "12"
                            }
                        ],
                        ingredients: [
                            "Pão",
                            "Carne",
                            "Queijo",
                            "Salada"
                        ],
                        img: 'https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2022/05/origem-do-hambuguer-cnn4.jpg?w=876&h=484&crop=1',
                        sideDishesCat: [
                            {
                                id: 12181,
                                name: "Molho",
                                qtnMin: "1",
                                qtnMax: "1",
                                sideDishes: [
                                    {
                                        id: 43972,
                                        name: "Barbecue",
                                        price: "0"
                                    },
                                    {
                                        id: 422,
                                        name: "Billie Jacky",
                                        price: "1"
                                    }
                                ]
                            }
                        ],
                    }
                ],
                sideDishes: [
                    12181
                ],
                fixedSizes: [
                    "Individual"
                ],
                fixedIngredients: [
                    "Pão",
                    "Carne",
                    "Queijo",
                    "Salada"
                ]
            },
            {
                id: 233223,
                name: "Pizza",
                slug: "pizza",
                img: "https://www.rbsdirect.com.br/filestore/3/2/8/1/7/3_b2196f37c7706d1/371823_edca5c22e8f1de7.jpg?w=1024&h=1024&a=c",
                position: 2,
                products: [
                    {
                        name: 'Portuguesa',
                        id: 1212143,
                        categoryId: 233223,
                        sizes: [
                            {
                                name: "4 Fatias",
                                price: "55"
                            },
                            {
                                name: "6 Fatias",
                                price: "57"
                            },
                            {
                                name: "8 Fatias",
                                price: "60"
                            }
                        ],
                        ingredients: [
                            'Molho de Tomate',
                            'Mussarela',
                            'Orégano'
                        ],
                        img: 'https://www.rbsdirect.com.br/filestore/3/2/8/1/7/3_b2196f37c7706d1/371823_edca5c22e8f1de7.jpg?w=1024&h=1024&a=c',
                        sideDishesCat: [
                            {
                                id: 121,
                                qtnMin: "0",
                                qtnMax: "1",
                                sideDishes: [
                                    {
                                        id: 3232,
                                        name: "Cheddar",
                                        price: "7"
                                    },
                                    {
                                        id: 33232,
                                        name: "Catupiry",
                                        price: "7"
                                    },
                                    {
                                        id: 32132,
                                        name: "Cream Cheese",
                                        price: "10"
                                    }
                                ]
                            }
                        ],
                    },
                    {
                        name: 'Napolitana',
                        id: 2242,
                        categoryId: 233223,
                        sizes: [
                            {
                                name: "4 Fatias",
                                price: "55"
                            },
                            {
                                name: "6 Fatias",
                                price: "57"
                            },
                            {
                                name: "8 Fatias",
                                price: "60"
                            }
                        ],
                        ingredients: [
                            'Molho de Tomate',
                            'Mussarela',
                            'Orégano'
                        ],
                        img: 'https://www.rbsdirect.com.br/filestore/3/2/8/1/7/3_b2196f37c7706d1/371823_edca5c22e8f1de7.jpg?w=1024&h=1024&a=c',
                        sideDishesCat: [
                            {
                                name: "Borda Recheda",
                                qtnMin: "0",
                                qtnMax: "1",
                                sideDishes: [
                                    {
                                        id: 3232,
                                        name: "Cheddar",
                                        price: "7"
                                    },
                                    {
                                        id: 33232,
                                        name: "Catupiry",
                                        price: "7"
                                    },
                                    {
                                        id: 32132,
                                        name: "Cream Cheese",
                                        price: "10"
                                    }
                                ]
                            }
                        ],
                    },
                    {
                        name: 'Frango c/ catupiry',
                        id: 424423,
                        categoryId: 233223,
                        sizes: [
                            {
                                name: "4 Fatias",
                                price: "55"
                            },
                            {
                                name: "6 Fatias",
                                price: "57"
                            },
                            {
                                name: "8 Fatias",
                                price: "60"
                            }
                        ],
                        ingredients: [
                            'Molho de Tomate',
                            'Mussarela',
                            'Orégano'
                        ],
                        img: 'https://www.rbsdirect.com.br/filestore/3/2/8/1/7/3_b2196f37c7706d1/371823_edca5c22e8f1de7.jpg?w=1024&h=1024&a=c',
                        sideDishesCat: [
                            {
                                name: "Borda Recheda",
                                qtnMin: "0",
                                qtnMax: "1",
                                sideDishes: [
                                    {
                                        id: 3232,
                                        name: "Cheddar",
                                        price: "7"
                                    },
                                    {
                                        id: 33232,
                                        name: "Catupiry",
                                        price: "7"
                                    },
                                    {
                                        id: 32132,
                                        name: "Cream Cheese",
                                        price: "10"
                                    }
                                ]
                            }
                        ],
                    },
                    {
                        name: '4 Queijos',
                        id: 42424169,
                        categoryId: 233223,
                        sizes: [
                            {
                                name: "4 Fatias",
                                price: "55"
                            },
                            {
                                name: "6 Fatias",
                                price: "57"
                            },
                            {
                                name: "8 Fatias",
                                price: "60"
                            }
                        ],
                        ingredients: [
                            'Molho de Tomate',
                            'Mussarela',
                            'Orégano'
                        ],
                        img: 'https://www.rbsdirect.com.br/filestore/3/2/8/1/7/3_b2196f37c7706d1/371823_edca5c22e8f1de7.jpg?w=1024&h=1024&a=c',
                        sideDishesCat: [
                            {
                                name: "Borda Recheda",
                                qtnMin: "0",
                                qtnMax: "1",
                                sideDishes: [
                                    {
                                        id: 3232,
                                        name: "Cheddar",
                                        price: "7"
                                    },
                                    {
                                        id: 33232,
                                        name: "Catupiry",
                                        price: "7"
                                    },
                                    {
                                        id: 32132,
                                        name: "Cream Cheese",
                                        price: "10"
                                    }
                                ]
                            }
                        ],
                    },
                ],
                sideDishes: [
                    121
                ],
                fixedSizes: [
                    "4 Fatias",
                    "6 Fatias",
                    "8 Fatias"
                ],
                fixedIngredients: [
                    'Molho de Tomate',
                    'Mussarela',
                    'Orégano'
                ]
            },
            {
                id: 32345,
                name: "Milkshake",
                slug: "milkshake",
                img: "https://assets.delirec.com/images/BpDZk4yvcfTkThu3xg7CMP6pBcv2/recipe/cbea3509-f2d9-41a1-b38b-161aef19f50e-Milkshake-de-chocolate--gallery-0",
                position: 3,
                products: [
                    {
                        id: 12,
                        name: 'Ovomaltine',
                        categoryId: 32345,
                        sizes: [
                            {
                                name: "300ml",
                                price: "12"
                            },
                            {
                                name: "500ml",
                                price: "14"
                            },
                            {
                                name: "600ml",
                                price: "16"
                            }
                        ],
                        ingredients: [
                        ],
                        img: 'https://assets.delirec.com/images/BpDZk4yvcfTkThu3xg7CMP6pBcv2/recipe/cbea3509-f2d9-41a1-b38b-161aef19f50e-Milkshake-de-chocolate--gallery-0',
                        sideDishesCat: [
                            {
                                id: 1281,
                                name: "Doces",
                                qtnMin: "0",
                                qtnMax: "10",
                                sideDishes: [
                                    {
                                        id: 432,
                                        name: "Fini",
                                        price: "3"
                                    },
                                    {
                                        id: 4322,
                                        name: "Bis",
                                        price: "2"
                                    },
                                    {
                                        id: 43722,
                                        name: "Jujuba",
                                        price: "5"
                                    }
                                ]
                            }
                        ],
                    }
                ],
                sideDishes: [
                    1281
                ],
                fixedSizes: [
                    "300ml",
                    "500ml",
                    "700ml"
                ],
                fixedIngredients: [
                ]
            },
        ]
    },
    sideDishes: {
        categories: [
            {
                id: 121,
                name: 'Borda Recheda',
                sideDishes: [
                    {
                        id: 3232,
                        categoryId: 121,
                        name: 'Cheddar'
                    }
                    ,
                    {
                        id: 33232,
                        categoryId: 121,
                        name: 'Catupiry'
                    }
                    ,
                    {
                        id: 32132,
                        categoryId: 121,
                        name: 'Cream Cheese'
                    }
                    ,
                ]
            }
            ,
            {
                id: 1281,
                name: "Doces",
                sideDishes: [
                    {
                        id: 432,
                        categoryId: 1281,
                        name: 'Fini'
                    }
                    ,
                    {
                        id: 4322,
                        categoryId: 1281,
                        name: 'Bis'
                    }
                    ,
                    {
                        id: 43722,
                        categoryId: 1281,
                        name: 'Jujuba'
                    }
                    ,
                ]
            }
            ,
            {
                id: 12181,
                name: "Molhos",
                sideDishes: [
                    {
                        id: 43972,
                        categoryId: 12181,
                        name: 'Barbecue'
                    }
                    ,
                    {
                        id: 422,
                        categoryId: 12181,
                        name: 'Billie Jacky'
                    }
                    ,
                ]
            }
        ]
    },
    currCatEdit: {},
    currProductAdding: {
        categoryId: 0,
        categoryImg: "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=}",
        fixedSizes: [],
        fixedSizeDishes: [],
        product: {
            name: '',
            img: '',
            sideDishes: [],
            sizes: [],
            ingredients: []
        }

    },
    currProductEditing: {
        category: {
            img: '',
            sideDishes: []
        },
        product: {
            categoryImg: '',
            name: "",
            id: 0,
            categoryId: 0,
            sizes: [],
            ingredients: [],
            sideDishesCat: [
                {
                    name: "",
                    qtnMin: "",
                    qtnMax: "",
                    sideDishes: [
                        {
                            name: "",
                            price: ""
                        }
                    ]
                }
            ],
            img: ""
        }
    },
    currSideDishAdding: {
        id: 0,
        name: '',
        sideDishes: [
            {
                id: 0,
                categoryId: 0,
                name: ''
            }
        ]
    },
    currSideDishEditing: {
        id: 0,
        name: '',
        sideDishes: [
            {
                id: 0,
                categoryId: 0,
                name: ''
            }
        ]
    }
}


export const dashReducers = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case "SET_MENU_TOGGLE":
            return { ...state, data_menu: actions.toggle }

        case "SET_THEME_TOGGLE":
            return { ...state, data: actions.theme }

        case "SET_COLOR_TOGGLE":
            return { ...state, data: actions.color }

        case "OPEN_THEME_MENU":
            return { ...state, data_theme_open: actions.open_theme }

        case "UPDATE_CATEGORIES":
            return { ...state, productsNcategory: actions.updatedProductsArray }

        case "SET_CATEGORY_ACTIVE":
            return { ...state, categoryActive: actions.active }

        case "UPDATE_SDISHES":
            return { ...state, sideDishes: actions.updatedSdishArray }

        case "CATEGORY_EDIT":
            return { ...state, currCatEdit: actions.category }

        case "SET_PROD_ADDING":
            return { ...state, currProductAdding: actions.product }

        case "SET_PROD_EDITING":
            return { ...state, currProductEditing: actions.product }

        case "SET_SDISHES_ADDING":
            return { ...state, currSideDishAdding: actions.sdCategory }

        case "SET_SDISHES_EDITING":
            return { ...state, currSideDishEditing: actions.sdCategory }

        default:
            return { ...state }
    }
}

const store = createStore(dashReducers)

export default store