---
layout: page
show_meta: false
title: "Lecture 2"
subheadline: ""
teaser: ""
header: no
permalink: "/swift/lecture2/"
---

#### lecture2a.swift
```swift
import Foundation

enum Country: String {
    case Germany = "DE"
    case France = "FR"
    case USA = "US"
}

class Car {
    var country: Country?
    let make: String
    let model: String
    let yearOfProduction: Int
    
    init() {
        make = ""
        model = ""
        yearOfProduction = 0
    }
    
    init(make: String = "", model: String = "", year: Int = 0) {
        self.make = make
        self.model = model
        yearOfProduction = year
    }
}

class Offer {
    let car: Car
    var price: Double
    
    init(car: Car, price: Double) {
        self.car = car
        self.price = price
    }
}

class Dealer {
    private var allCars = [Car]()
    private var allOffers = [Offer]()
    
    func getAllCars() -> [Car] {
        return allCars
    }
    
    func add(car: Car, price: Double) {
        allCars.append(car)
        let offer = Offer(car: car, price: price)
        allOffers.append(offer)
    }
    
    func sell(car: Car) {
        
    }
    
    func price(for car: Car) -> Double? {
        return 0
    }
}

let lvivDealer = Dealer()
let audi = Car(make: "Audi", model: "A6", year: 2000)
let mb = Car(make: "MB", model: "E", year: 2001)
let bmw = Car(make: "BMW", model: "5", year: 2004)

lvivDealer.add(car: audi, price: 1000)
lvivDealer.add(car: mb, price: 800)
lvivDealer.add(car: bmw, price: 1200)

let all = lvivDealer.getAllCars()

print(all)
```
#### Output:
```
[lecture2a.Car, lecture2a.Car, lecture2a.Car]
```

#### lecture2b.swift
```swift
import Foundation

enum Country: String {
    case Germany = "DE"
    case France = "FR"
    case USA = "US"
}

func randomString(length: Int) -> String {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    return String((0...length-1).map{ _ in letters.randomElement()! })
}

class Car {
    let id: String = randomString(length: 10)
    var country: Country?
    let make: String
    let model: String
    let yearOfProduction: Int
    
    init() {
        make = ""
        model = ""
        yearOfProduction = 0
    }
    
    init(make: String = "", model: String = "", year: Int = 0) {
        self.make = make
        self.model = model
        yearOfProduction = year
    }
}

class Offer {
    let car: Car
    var price: Double
    var sold = false
    
    init(car: Car, price: Double) {
        self.car = car
        self.price = price
    }
}

class Dealer {
    private var allCars = [Car]()
    private var allOffers = [Offer]()
    
    func getAllCars() -> [Car] {
        return allCars
    }
    
    func add(car: Car, price: Double) {
        allCars.append(car)
        let offer = Offer(car: car, price: price)
        allOffers.append(offer)
    }
    
    func sell(car: Car, price: Double) -> Bool {
        guard let index = allCars.lastIndex(where: { (carInStock) -> Bool in
            return carInStock.id == car.id
        }) else {
            return false
        }
        
        guard let offerForThisCar = allOffers.filter({ (offer) -> Bool in
            return offer.car.id == car.id
        }).first else  {
            return false
        }
        
        if offerForThisCar.sold {
            return false
        }
        
        if price >= offerForThisCar.price {
            allCars.remove(at: index)
            offerForThisCar.sold = true
            return true
        } else {
            return false
        }
    }
    
    func price(for car: Car) -> Double? {
        let offers = allOffers.filter { (offer) -> Bool in
            return offer.car.id == car.id
        }
        if let offer = offers.first {
            return offer.price
        } else {
            return nil
        }
    }
}

let lvivDealer = Dealer()
let audi = Car(make: "Audi", model: "A6", year: 2000)
let mb = Car(make: "MB", model: "E", year: 2001)
let bmw = Car(make: "BMW", model: "5", year: 2004)

//lvivDealer.add(car: audi, price: 1000)
lvivDealer.add(car: mb, price: 800)
lvivDealer.add(car: bmw, price: 1200)

let all = lvivDealer.getAllCars()

if let goodPrice = lvivDealer.price(for: audi) {
   let result = lvivDealer.sell(car: audi, price: goodPrice)
    print(result)
} else {
    print("Car is not on the list")
}
```
#### Output:
```
Car is not on the list
```

#### lecture2c.swift
```swift
import Foundation

enum Country: String {
    case Germany = "DE"
    case France = "FR"
    case USA = "US"
}

func randomString(length: Int) -> String {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    return String((0...length-1).map{ _ in letters.randomElement()! })
}

class Car {
    let id: String = randomString(length: 10)
    var country: Country?
    let make: String
    let model: String
    let yearOfProduction: Int
    
    init() {
        make = ""
        model = ""
        yearOfProduction = 0
    }
    
    init(make: String = "", model: String = "", year: Int = 0) {
        self.make = make
        self.model = model
        yearOfProduction = year
    }
}

class Offer {
    let car: Car
    var price: Double
    var sold = false
    
    init(car: Car, price: Double) {
        self.car = car
        self.price = price
    }
}

class Dealer {
    private var allCars = [Car]()
    private var allOffers = [Offer]()
    
    func getAllCars() -> [Car] {
        return allCars
    }
    
    func add(car: Car, price: Double) {
        allCars.append(car)
        let offer = Offer(car: car, price: price)
        allOffers.append(offer)
    }
    
    func sell(car: Car, price: Double) throws {
        guard let index = allCars.lastIndex(where: { (carInStock) -> Bool in
            return carInStock.id == car.id
        }) else {
            throw Failure(message: "This car isn't in stock")
        }
        
        guard let offerForThisCar = allOffers.filter({ (offer) -> Bool in
            return offer.car.id == car.id
        }).first else  {
            throw Failure.init(message: "Internal error")
        }
        
        if offerForThisCar.sold {
            throw Failure(message: "This car is already sold. Sorry(")
        }
        
        if price >= offerForThisCar.price {
            allCars.remove(at: index)
            offerForThisCar.sold = true
        } else {
            throw Failure(message: "Give a higher price!")
        }
    }
    
    func price(for car: Car) -> Double? {
        let offers = allOffers.filter { (offer) -> Bool in
            return offer.car.id == car.id
        }
        if let offer = offers.first {
            return offer.price
        } else {
            return nil
        }
    }
}

struct Failure: Error {
    let message: String
}

let lvivDealer = Dealer()
let audi = Car(make: "Audi", model: "A6", year: 2000)
let mb = Car(make: "MB", model: "E", year: 2001)
let bmw = Car(make: "BMW", model: "5", year: 2004)

lvivDealer.add(car: audi, price: 1000)
lvivDealer.add(car: mb, price: 800)
lvivDealer.add(car: bmw, price: 1200)

let all = lvivDealer.getAllCars()

if let goodPrice = lvivDealer.price(for: audi) {
    do {
        try lvivDealer.sell(car: audi, price: goodPrice)
        print("Congratulations with your new car! Enjoy it")
    } catch (let error) {
        print(error)
    }
} else {
    print("Car is not on the list")
}
```
#### Output:
```
Congratulations with your new car! Enjoy it
```

### Task:

#ДОМАШНЄ_ЗАВДАННЯ
Написати систему управління бібліотекою (консольну апку або Playground). 
Зробити:
1. Клас для книжки (UUID, назва, автор, тип (книга/журнал/газета), …). Книжка має історію всіх своїх переміщень (бібліотека-користувач-бібліотека)
2. Клас бібліотеки
3. Всі інші класи, які вам необхідні для реалізації

Функціонал бібліотеки:
1. Додати нову книжку
2. Взяти книжку на руки (зберегти в історію ім’я людини, яка бере книжку; дату видачі)
3. Прийняти назад книжку в бібліотеку (зберегти дату прийому)
4. Отримати список книжок (з можливістю фільтрування по типу):
а) всі, що існують в бібліотеці
б) всі, які зараз доступні
в) всі, які зараз в когось на руках (з інфою про користувача і термін від видачі книжки)

+ будь-який цікавий функціонал, який прийде вам в голову. вимоги вище - це пакет мінімального функціоналу

### Realization: