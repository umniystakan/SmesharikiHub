// Fallback database matching exactly the content of games.json.
// This guarantees 100% functionality even when opened directly as a file:// (offline/no-cors).
const FALLBACK_GAMES_DATA = {
  "games": [
    {
      "id": "game001",
      "title": "Круглая компания",
      "cover": "https://dn720402.ca.archive.org/0/items/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/1%29%20%D0%9A%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F%20%282004%29/1%20%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F.jpg",
      "downloads": [
        {
          "disk": 1,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/1%29%20%D0%9A%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F%20%282004%29/%D0%9A%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F%201.0/Disk%201.iso"
        },
        {
          "disk": 2,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/1%29%20%D0%9A%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F%20%282004%29/%D0%9A%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F%201.0/Disk%202.iso"
        }
      ],
      "description": "Круглая компания — первая компьютерная игра по мотивам франшизы «Смешарики», вышедшая 16 декабря 2004 года. Разработана СКА «Петербург». Изначально распространялась в отдельных двухдисковых изданиях — обычной CD-редакции и расширенной DVD-редакции."
    },
    {
      "id": "game002",
      "title": "Калейдоскоп игр",
      "cover": "https://dn720402.ca.archive.org/0/items/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/2%29%20%D0%9A%D0%B0%D0%BB%D0%B5%D0%B9%D0%B4%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%20%D0%B8%D0%B3%D1%80%20%282005%29/2%20%D0%BA%D0%B0%D0%BB%D0%B5%D0%B9%D0%B4%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%20%D0%B8%D0%B3%D1%80.jpg",
      "downloads": [
        {
          "disk": 1,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/2%29%20%D0%9A%D0%B0%D0%BB%D0%B5%D0%B9%D0%B4%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%20%D0%B8%D0%B3%D1%80%20%282005%29/%D0%9A%D0%B0%D0%BB%D0%B5%D0%B9%D0%B4%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%20%D0%B8%D0%B3%D1%80%201.0/%D0%9A%D0%B0%D0%BB%D0%B5%D0%B9%D0%B4%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%20%D0%B8%D0%B3%D1%80%201.iso"
        }
      ],
      "description": "Калейдоскоп игр — вторая компьютерная игра по мотивам франшизы «Смешарики», вышедшая 26 мая 2005 года. Включает в себя двенадцать игр и бонус. Переиздавалась в 2009 и 2012 году."
    },
    {
      "id": "game003",
      "title": "Компьютер Ёжика",
      "cover": "https://dn720402.ca.archive.org/0/items/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/3%29%20%D0%9A%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%20%D0%81%D0%B6%D0%B8%D0%BA%D0%B0%20%282005%29/3%20%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%20%D1%91%D0%B6%D0%B8%D0%BA%D0%B0.jpg",
      "downloads": [
        {
          "disk": 1,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/3%29%20%D0%9A%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%20%D0%81%D0%B6%D0%B8%D0%BA%D0%B0%20%282005%29/%D0%9A%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%20%D0%81%D0%B6%D0%B8%D0%BA%D0%B0%201.0/Smeshariki%20Kompjuter%20Ezhika%20CD%201.iso"
        },
        {
          "disk": 2,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/3%29%20%D0%9A%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%20%D0%81%D0%B6%D0%B8%D0%BA%D0%B0%20%282005%29/%D0%9A%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%20%D0%81%D0%B6%D0%B8%D0%BA%D0%B0%201.0/Smeshariki%20Kompjuter%20Ezhika%20CD%202.iso"
        }
      ],
      "description": ""
    },
    {
      "id": "game004",
      "title": "По дороге со Смешариками",
      "cover": "https://dn720402.ca.archive.org/0/items/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/4%29%20%D0%9F%D0%BE%20%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B5%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%20%282006%29/4%20%D0%BF%D0%BE%20%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B5%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8.jpg",
      "downloads": [
        {
          "disk": 1,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/4%29%20%D0%9F%D0%BE%20%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B5%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%20%282006%29/%D0%9F%D0%BE%20%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B5%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%201.0/%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.%20%D0%9F%D0%BE%20%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B5%20%D1%81%D0%BE%20%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%20cd1.iso"
        },
        {
          "disk": 2,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/4%29%20%D0%9F%D0%BE%20%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B5%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%20%282006%29/%D0%9F%D0%BE%20%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B5%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%201.0/%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.%20%D0%9F%D0%BE%20%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B5%20%D1%81%D0%BE%20%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%20cd2.iso"
        }
      ],
      "description": ""
    },
    {
      "id": "game005",
      "title": "Нюша-принцесса",
      "cover": "https://dn720402.ca.archive.org/0/items/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/5%29%20%D0%9D%D1%8E%D1%88%D0%B0-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D1%81%D1%81%D0%B0%20%282006%29/5%20%D0%BD%D1%8E%D1%88%D0%B0%20%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D1%81%D1%81%D0%B0.jpg",
      "downloads": [
        {
          "disk": 1,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/5%29%20%D0%9D%D1%8E%D1%88%D0%B0-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D1%81%D1%81%D0%B0%20%282006%29/%D0%9D%D1%8E%D1%88%D0%B0-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D1%81%D1%81%D0%B0%201.0/%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.%20%D0%9D%D1%8E%D1%88%D0%B0-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D1%81%D1%81%D0%B0%20cd1.iso"
        },
        {
          "disk": 2,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/5%29%20%D0%9D%D1%8E%D1%88%D0%B0-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D1%81%D1%81%D0%B0%20%282006%29/%D0%9D%D1%8E%D1%88%D0%B0-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D1%81%D1%81%D0%B0%201.0/%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.%20%D0%9D%D1%8E%D1%88%D0%B0-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D1%81%D1%81%D0%B0%20cd2.iso"
        }
      ],
      "description": ""
    },
    {
      "id": "game006",
      "title": "Олимпиада Смешариков",
      "cover": "https://ia601602.us.archive.org/15/items/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/6%29%20%D0%9E%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B0%D0%B4%D0%B0%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282006%29/6%20%D0%BE%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B0%D0%B4%D0%B0%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2.jpg",
      "downloads": [
        {
          "disk": 1,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/6%29%20%D0%9E%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B0%D0%B4%D0%B0%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282006%29/%D0%9E%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B0%D0%B4%D0%B0%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%201.0/%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.%20%D0%9E%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B0%D0%B4%D0%B0%20%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20cd1.iso"
        },
        {
          "disk": 2,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/6%29%20%D0%9E%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B0%D0%B4%D0%B0%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282006%29/%D0%9E%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B0%D0%B4%D0%B0%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%201.0/%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.%20%D0%9E%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B0%D0%B4%D0%B0%20%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20cd2.iso"
        }
      ],
      "description": ""
    },
    {
      "id": "game007",
      "title": "Праздники со Смешариками",
      "cover": "https://dn720402.ca.archive.org/0/items/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/7%29%20%D0%9F%D1%80%D0%B0%D0%B7%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%20%282006%29/7%20%D0%BF%D1%80%D0%B0%D0%B7%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8.jpg",
      "downloads": [
        {
          "disk": 1,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/7%29%20%D0%9F%D1%80%D0%B0%D0%B7%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%20%282006%29/%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.%20%D0%9F%D1%80%D0%B0%D0%B7%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8%20%D1%81%D0%BE%20%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8.iso"
        }
      ],
      "description": ""
    },
    {
      "id": "game008",
      "title": "Калейдоскоп игр 2",
      "cover": "https://dn720402.ca.archive.org/0/items/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/8%29%20%D0%9A%D0%B0%D0%BB%D0%B5%D0%B9%D0%B4%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%20%D0%B8%D0%B3%D1%80%202%20%282007%29/8%20%D0%BA%D0%B0%D0%BB%D0%B5%D0%B9%D0%B4%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%20%D0%B8%D0%B3%D1%80%202.jpg",
      "downloads": [
        {
          "disk": 1,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/8%29%20%D0%9A%D0%B0%D0%BB%D0%B5%D0%B9%D0%B4%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%20%D0%B8%D0%B3%D1%80%202%20%282007%29/%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.%20%D0%9A%D0%B0%D0%BB%D0%B5%D0%B9%D0%B4%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%20%D0%B8%D0%B3%D1%80%202.iso"
        }
      ],
      "description": ""
    },
    {
      "id": "game009",
      "title": "Считаем со Смешариками",
      "cover": "https://dn720402.ca.archive.org/0/items/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/10%29%20%D0%A1%D1%87%D0%B8%D1%82%D0%B0%D0%B5%D0%BC%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%20%282007%29/10%20%D1%81%D1%87%D0%B8%D1%82%D0%B0%D0%B5%D0%BC%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8.jpg",
      "downloads": [
        {
          "disk": 1,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/10%29%20%D0%A1%D1%87%D0%B8%D1%82%D0%B0%D0%B5%D0%BC%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%20%282007%29/%D0%A1%D1%87%D0%B8%D1%82%D0%B0%D0%B5%D0%BC%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%201.0/%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.%20%D0%A1%D1%87%D0%B8%D1%82%D0%B0%D0%B5%D0%BC%20%D1%81%D0%BE%20%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%20cd1.iso"
        },
        {
          "disk": 2,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/10%29%20%D0%A1%D1%87%D0%B8%D1%82%D0%B0%D0%B5%D0%BC%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%20%282007%29/%D0%A1%D1%87%D0%B8%D1%82%D0%B0%D0%B5%D0%BC%20%D1%81%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%201.0/%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.%20%D0%A1%D1%87%D0%B8%D1%82%D0%B0%D0%B5%D0%BC%20%D1%81%D0%BE%20%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%20cd2.iso"
        }
      ],
      "description": ""
    },
    {
      "id": "game010",
      "title": "Собери страну Смешариков!",
      "cover": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/11%29%20%D0%A1%D0%BE%D0%B1%D0%B5%D1%80%D0%B8%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%83%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%21%20%282007%29/11%20%D1%81%D0%BE%D0%B1%D0%B5%D1%80%D0%B8%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%83%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2.jpg",
      "downloads": [
        {
          "disk": 1,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/11%29%20%D0%A1%D0%BE%D0%B1%D0%B5%D1%80%D0%B8%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%83%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%21%20%282007%29/%D0%A1%D0%BE%D0%B1%D0%B5%D1%80%D0%B8%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%83%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%21%201.0/%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.%20%D0%A1%D0%BE%D0%B1%D0%B5%D1%80%D0%B8%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%83%20%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20cd1.iso"
        },
        {
          "disk": 2,
          "url": "https://archive.org/download/smesharikigames/%D0%9F%D0%9A%20%D0%B8%D0%B3%D1%80%D1%8B%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20%282004-2012%29/11%29%20%D0%A1%D0%BE%D0%B1%D0%B5%D1%80%D0%B8%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%83%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%21%20%282007%29/%D0%A1%D0%BE%D0%B1%D0%B5%D1%80%D0%B8%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%83%20%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%21%201.0/%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.%20%D0%A1%D0%BE%D0%B1%D0%B5%D1%80%D0%B8%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%83%20%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%20cd2.iso"
        }
      ],
      "description": ""
    }
  ]
};

// Global App State
let gamesList = [];
let searchQuery = "";
let diskFilter = "all"; // 'all', '1', '2'

// DOM Elements
const gamesGrid = document.getElementById("games-grid");
const searchInput = document.getElementById("search-input");
const searchClearBtn = document.getElementById("search-clear-btn");
const resultsCount = document.getElementById("results-count");
const filterTabs = document.querySelectorAll(".filter-tab");

// Initialize application
async function init() {
  showLoader();
  try {
    // Try fetching the live games.json file
    const response = await fetch("games.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    gamesList = data.games || [];
    console.log("Loaded game list successfully from games.json server fetch");
  } catch (error) {
    console.warn("Could not load from games.json via fetch (likely CORS, file:// or offline mode). Falling back to internal DB.", error);
    gamesList = FALLBACK_GAMES_DATA.games;
  }
  
  hideLoader();
  renderGames();
  setupEventListeners();
}

// Show animated loader
function showLoader() {
  gamesGrid.innerHTML = `
    <div class="loader-container">
      <div class="spinner"></div>
      <p>Сборка коллекции из Ромашковой Долины...</p>
    </div>
  `;
}

// Hide loader
function hideLoader() {
  gamesGrid.innerHTML = "";
}

// Generate the beautiful HTML structure for a single game card
function createGameCard(game, index) {
  // Atmospheric placeholder for missing descriptions
  const descriptionText = game.description && game.description.trim() !== ""
    ? game.description
    : "В Ромашковой Долине пока не составили подробное описание для этой игры. Но вы можете скачать её, запустить и узнать все секреты самостоятельно!";
  
  const isDescriptionEmpty = !game.description || game.description.trim() === "";

  // Render download buttons beautifully
  let downloadButtonsHtml = "";
  if (game.downloads && game.downloads.length > 0) {
    downloadButtonsHtml = game.downloads.map(dl => {
      const diskNumber = dl.disk;
      const isMultipleDisks = game.downloads.length > 1;
      
      let btnClass = "disk-generic";
      let btnText = `Скачать ISO`;
      
      if (isMultipleDisks) {
        btnClass = diskNumber === 1 ? "disk-1" : diskNumber === 2 ? "disk-2" : "disk-generic";
        btnText = `Диск ${diskNumber}`;
      } else {
        // If single disc, check what disc number it actually is, but style it nicely
        btnClass = "disk-1";
        btnText = `Диск ${diskNumber}`;
      }

      return `
        <a href="${dl.url}" target="_blank" class="download-btn ${btnClass}" title="Скачать ISO образ диска ${diskNumber}">
          <i data-lucide="disc"></i>
          <span>${btnText}</span>
        </a>
      `;
    }).join("");
  } else {
    downloadButtonsHtml = `
      <div style="font-size:0.85rem;color:var(--text-muted);font-style:italic;padding:10px;text-align:center;width:100%;grid-column:1/-1;">
        Ссылки на скачивание не найдены
      </div>
    `;
  }

  // Cover image with lazy-loading and robust fallback handling
  // We use inline error handler to call 'handleImageError' in case URLs fail (e.g. DNS block or offline)
  const coverImgTag = game.cover 
    ? `<img src="${game.cover}" alt="Обложка игры ${game.title}" class="cover-image" loading="lazy" onerror="handleImageError(this, '${game.title}')">`
    : createFallbackSvgPlaceholder(game.title);

  // Return final card html with CC BY-SA Fandom licence attached to each card description
  return `
    <article class="game-card fade-in" style="animation-delay: ${index * 0.05}s">
      <div class="cover-wrapper">
        ${coverImgTag}
      </div>
      <div class="game-info">
        <h2 class="game-title">${game.title}</h2>
        <div class="game-description-wrapper">
          <p class="game-description ${isDescriptionEmpty ? 'empty' : ''}">${descriptionText}</p>
          <div class="attribution-footer">
            Информация частично основана на материалах Fandom (CC BY-SA 3.0). Источник: 
            <a href="https://losyash-library.fandom.com" target="_blank" rel="noopener noreferrer">https://losyash-library.fandom.com</a>
          </div>
        </div>
      </div>
      <div class="game-downloads">
        <div class="downloads-title">
          <i data-lucide="download-cloud"></i>
          <span>Файлы для скачивания</span>
        </div>
        <div class="download-buttons-grid">
          ${downloadButtonsHtml}
        </div>
      </div>
    </article>
  `;
}

// Generates SVG placeholder with visual appeal in case cover is empty
function createFallbackSvgPlaceholder(title) {
  return `
    <div class="cover-placeholder">
      <i data-lucide="disc" style="width:48px;height:48px;stroke-width:1.2;"></i>
      <span>${title}</span>
    </div>
  `;
}

// Dynamic image fallback if internet connection fails or URLs fail to load
function handleImageError(imgElement, title) {
  // Replace the broken image with a beautiful styled vector placeholder
  const parent = imgElement.parentElement;
  if (parent) {
    parent.innerHTML = createFallbackSvgPlaceholder(title);
    // Initialize Lucide icons on newly created HTML
    lucide.createIcons();
  }
}

// Render filtered games list
function renderGames() {
  // Apply Search Query Filter & Disk Filter
  const filteredGames = gamesList.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesDisk = true;
    const diskCount = game.downloads ? game.downloads.length : 0;
    if (diskFilter === "1") {
      matchesDisk = (diskCount === 1);
    } else if (diskFilter === "2") {
      matchesDisk = (diskCount === 2);
    }
    
    return matchesSearch && matchesDisk;
  });

  // Update Stats Counters
  updateStats(filteredGames.length);

  // If no matching games, display modern empty state
  if (filteredGames.length === 0) {
    gamesGrid.innerHTML = `
      <div class="empty-state">
        <i data-lucide="search-x" style="width:64px;height:64px;"></i>
        <h3>Ничего не нашлось!</h3>
        <p>Игр с названием "${searchQuery}" ${diskFilter !== 'all' ? `и с ${diskFilter}-мя дисками` : ''} не обнаружено в нашей библиотеке. Попробуйте изменить параметры поиска.</p>
        <button class="reset-search-btn" onclick="resetSearch()">Сбросить фильтры</button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  // Draw list of cards
  gamesGrid.innerHTML = filteredGames.map((game, index) => createGameCard(game, index)).join("");
  
  // Activate Lucide modern line icons
  lucide.createIcons();
}

// Update search statistics indicator
function updateStats(count) {
  if (searchQuery === "" && diskFilter === "all") {
    resultsCount.innerHTML = `Всего игр в каталоге: <span>${count}</span>`;
  } else {
    resultsCount.innerHTML = `Найдено совпадений: <span>${count}</span>`;
  }
}

// Setup Event Handlers
function setupEventListeners() {
  // Dynamic Real-time Search Input
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    
    // Toggle clean absolute search clear button visibility
    if (searchQuery.length > 0) {
      searchClearBtn.classList.add("visible");
    } else {
      searchClearBtn.classList.remove("visible");
    }
    
    renderGames();
  });

  // Clear Button action
  searchClearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    searchClearBtn.classList.remove("visible");
    searchInput.focus();
    renderGames();
  });

  // Disc Filter Tabs click handler
  filterTabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      // Remove active class from all tabs
      filterTabs.forEach(t => t.classList.remove("active"));
      // Add active to current
      tab.classList.add("active");
      
      diskFilter = tab.getAttribute("data-filter");
      renderGames();
    });
  });
}

// Reset button inside empty search state
function resetSearch() {
  searchInput.value = "";
  searchQuery = "";
  searchClearBtn.classList.remove("visible");
  
  diskFilter = "all";
  filterTabs.forEach(t => {
    if (t.getAttribute("data-filter") === "all") {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });

  renderGames();
}

// Boot application when DOM is fully prepared
document.addEventListener("DOMContentLoaded", init);
