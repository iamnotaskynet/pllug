---
layout: page
show_meta: false
title: "Lecture 1"
subheadline: ""
teaser: ""
header: no
permalink: "/swift/lecture1/"
---

<!-- background: green -->
```swift

import Foundation

// let - is a constant 
let constant = 0
// var - is a changeble 
var variable = 0

// copy from one to another
let copyConstant = constant

class TestClass {
    
}

let valueType = "Hello"
let referenceType = TestClass()

let copyValue = valueType
let copyReference = referenceType
weak var copyReference_1 = referenceType
unowned let copyReference_2 = referenceType


let intValue: Int = 0
let floValue: Float = 0.0
let dobValue: Double = 0.0
let cgfValue: CGFloat = 0.0
let result_1 = Double(cgfValue) + dobValue

let text: String = "ACpllug"
let bool: Bool? = false

let result_2_hasPrefix = text.hasPrefix("AC")
print(result_2_hasPrefix)

let result_2 = text.replacingOccurrences(of: "gg", with: "")

// Arrays initializing
var arrayText: Array<String> = ["Alex", "Roma"] // Array<Any> = ["Alex", "Roma", 0, 100]
let arrayNumbers = [0, 1, 2, 3, 4]

let value_1 = arrayNumbers[0]


var optionalName: String? = nil
let index_1 = 5

if optionalName != nil {
    let notOptional: String = optionalName!
}

if let optionalName = optionalName, index_1 < arrayText.count {
}

arrayText.append("Vova")
arrayText.append(contentsOf: ["Vova", "Ivan"])
arrayText.remove(at: index_1)

if var index_2 = arrayText.firstIndex(of: "Alex")  {

}

let empty_1 = [String]()
let empty_2: [String] = []


var dictionary_1: Dictionary<String, Int> = ["Key_1": 0, "Key_2": 0]
var dictionary_2 = ["developer": "Alex", "student": "Vova"]

var value_2 = dictionary_2["developer"]

func test() {
    guard let nonOptionalValue = value_2 else {return}
}

if let notOptionalValue = value_2 {
    print("FOUND", notOptionalValue)
    let value_3 = dictionary_2["student"]

    /* This should be in functions block */
    // guard let nonOptionalValue2 = value_3 else {
    //     return 
    // }
} else {
    print("Value not found")
}

func doSomething(name: String?) -> (name: String, age: Int) {
    return ("default", -1)
}
var agesDictionary = ["Stepan": 22, "Vova": 40]
var agesArray = [1, 2, 3, 4, 5, 6, 7] //without type empty array occure an error

func findUserAge1(name: String?) -> Int? {
    guard let name = name, let age = agesDictionary[name] else { return -1 }

    return age
}
func findUserAge2(name: String?) -> Int? {
    return agesDictionary[name ?? ""]
}

var index = 0

func findUserAge3(name: String?) -> Any {
    if index >= 0, index < agesArray.count {

        //
        return agesArray[index]
    } else {
        return -1
    }
}

func findUserAge4(name: String?) -> Any {
    guard agesArray.contains(index) else { return -1}

    return agesArray[index]
}

enum PersonType: String {
    case developer = "Vakom developer" //developer(string)
    case student = "pllug student" //student(string)
    case other = "?????"
    case manager = "PM"
    case taxi = "driver"
}

func assignWork(type: PersonType) {
    
    switch type {
        case .developer:
            print(type.rawValue)
            print("do code, now!")
        case .student:
            print(type.rawValue)
            print("listen")
        case .manager:
            print(type.rawValue)
        case .other:
            print(type.rawValue)
        case .taxi:
            print(type.rawValue)
        // default - do not use it!
        
    }
}

assignWork(type: .developer)
```

#### Output:

```
lecture1.swift:50:9: warning: immutable value 'notOptional' was never used; consider replacing with '_' or removing it
    let notOptional: String = optionalName!
        ^~~~~~~~~~~
        _
lecture1.swift:53:8: warning: immutable value 'optionalName' was never used; consider replacing with '_' or removing it
if let optionalName = optionalName, index_1 < arrayText.count {
       ^~~~~~~~~~~~
       _
lecture1.swift:60:8: warning: value 'index_2' was defined but never used; consider replacing with boolean test
if var index_2 = arrayText.firstIndex(of: "Alex")  {   ~~~~^~~~~~~~~~
                                                  != nil
lecture1.swift:79:9: warning: initialization of immutable value 'value_3' was never used; consider replacing with assignment to '_' or removing it
    let value_3 = dictionary_2["student"]
    ~~~~^~~~~~~
    _
lecture1.swift:74:15: warning: value 'nonOptionalValue' was defined but never used; consider replacing with boolean test
    guard let nonOptionalValue = value_2 else {return}
          ~~~~^~~~~~~~~~~~~~~~~~~
                                         != nil
true
Fatal error: Index out of range
```