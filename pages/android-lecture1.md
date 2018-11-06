---
layout: page
show_meta: false
title: "Lecture 1"
subheadline: "Java syntax"
teaser: ""
header: no
permalink: "/android/lecture1/"
---

[Java Tutorials (Oracle)](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/index.html)

[Java wikibook (Ukrainian)](https://uk.wikibooks.org/wiki/%D0%9E%D1%81%D0%B2%D0%BE%D1%8E%D1%94%D0%BC%D0%BE_Java)

[Java course (Codeacademy)](https://www.codecademy.com/catalog/language/java)

[Java course (Prometheus)](https://courses.prometheus.org.ua/courses/EPAM/JAVA101/2016_T2/about)


#### E01_PrimitiveDataTypes.java

```java
public class E01_PrimitiveDataTypes {
    private byte byteNumber; // - 128 .. 127 8-bit
    private short shortNumber; // - 32_768 .. 32_767 16-bit
    private int intNumber; // - 2_147_483_648 .. 2_147_483_647 32-bit
    private long longNumber;     // - 9_223_372_036_854_775_808 ..
    // 9_223_372_036_854_775_807 64-bit

    private float floatNumber; // ± 4,402 * 10^38 32-bit
    private double doubleNumber; // ± 1,798 * 10^308 64-bit

    private char charSymbol; // Unicode U+0000 .. U+FFFF 16-bit

    private boolean isBoolean; // true or false

    public static void main(String[] args) {
        int decimal = 200;
        int octValue = 065;
        int hexValue = 0x34;
        int binaryValue = 0b1011101;//0135 //0x5D

        System.out.println("decimal : " + decimal);
        System.out.println("octValue : " + octValue);
        System.out.println("hexValue : " + hexValue);
        System.out.println("binaryValue : " + binaryValue);
        /*
        2     8
        000 - 0
        001 - 1
        010 - 2
        011 - 3
        100 - 4
        101 - 5
        110 - 6
        111 - 7
         */

        long longValue = 23L;
        long longValue2 = (long) 2334343;

        float floatValue1 = (float) 23.454;
        float floatValue2 = 3344.54545797F;

        double doubleValue1 = 45.786;
        double doubleValue2 = 45.786e199;
        double doubleValue3 = 1e100;

        char charValue = 'a' + 10;
        System.out.println("charValue : " + charValue);
    }
}
```

#### E02_Operators.java

```java
public class E02_Operators {
    public static void main(String[] args) {
        int a = 4 + 3;
        System.out.println("a: " + a);
        int b = 3 - 6 * 8;
        System.out.println("b: " + b);
        int c = 4 >> 2;
        System.out.println("c: " + c);
        int d = 4 << 2;
        System.out.println("d: " + d);
        int e = -1 >>> 1;
        System.out.println("e: " + e);

        System.out.println("\nbinary -1: " + Integer.toBinaryString(-1));
        System.out.println("binary -1 >>> 1: " + Integer.toBinaryString(e));
//        11111111111111111111111111111111
//        01111111111111111111111111111111

        float f = 4 / 6.5f;
        System.out.println("f: " + f);

        System.out.println("\nbinary 4: " + Integer.toBinaryString(4));
        System.out.println("binary 6: " + Integer.toBinaryString(6));
        int g = 4 & 6;
        System.out.println("binary g: " + Integer.toBinaryString(g));

        System.out.println("\nbinary 3: 00" + Integer.toBinaryString(3));
        System.out.println("binary 8: " + Integer.toBinaryString(8));
        int h = 3 | 8;
        System.out.println("binary h: " + Integer.toBinaryString(h));

        boolean i = true && false;
        System.out.println("i: " + i);
        boolean j = true || false;
        System.out.println("j: " + j);


        double sqr5 = Math.sqrt(5);
        System.out.println("sqr5: " + sqr5);
    }
}
```

#### E03_if_statement.java

```java
public class E03_if_statement {
    public static void main(String[] args) {
        //if statement
        if (3 / 2 == 1) {
            System.out.println(" 1 * 2 = 3 :)");
        }

        String s1 = "Test";
        String s2 = "Test";//new String("Test");
//        s1 = s1 + "d";
        if (s1 == s2) {
            System.out.println(" s1 == s2");
        } else {
            System.out.println(" s1 != s2");
        }
//                [Test]
//           s1 ->[Test] <- s2
//                [Testd]

        //big body
        if (true) {
            int a = 1 + 2;
            int b = a + 3;
            int c = b + 4;
            int d = c + 5;
            System.out.println(" 1 + 2 + ... + 5  = " + d);
        }

        //if-else
        if (4 > 5) {
            System.out.println("Wow 4 > 5!");
        } else {
            System.out.println("Nien!");
        }

        //if-else
        int way = 3;

        if (way == 1) {
            System.out.println("Rich");
        } else if (way == 2) {
            System.out.println("Married!");
        } else if (way == 3) {
            System.out.println("Married!");
        } else if (way == 4) {
            System.out.println("Married!");
        } else {
            System.out.println("Happy!");
        }

        switch (way) {
            case 1: System.out.println("Rich"); break;
            case 2:
            case 3:
            case 4:
                System.out.println("Married!"); break;
            default: System.out.println("Happy!"); break;
        }


        String s3 = new String("Test");
        switch (s3) {
            case "1": System.out.println("Rich"); break;
            case "Test":
            case "b":
            case "4":
                System.out.println("Married!"); break;
            default: System.out.println("Happy!"); break;
        }
        //switch with breaks
        String numberString;
        int numberValue = 2;

        switch (numberValue) {
            case 1:
                numberString = "one";
                break;
            case 2:
                numberString = "two";
                break;
            default:
                numberString = "a lot";
                break;
        }
        System.out.println("numberString: " + numberString);

        //switch with missed breaks
        switch (numberValue) {
            case 1:
                numberString = "one";
            case 2:
                numberString = "two";
            case 5:
                numberString = "a lot";
                break;
        }
        System.out.println("\nnumberString: " + numberString);
    }
}
```

#### E04_loop.java

```java
public class E04_loop {
    public static void main(String[] args) {
        //for loop
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
        }
        for (int i = 10; i > 0; i--) {
            System.out.println(i);
        }

        for (int i = 0; i < 10; i = i + 2) {
            System.out.println(i);
        }

        //foreach
        String[] strings = new String[]{"one", "two", "three"};

        for (String number : strings) {
            System.out.println(number);
        }

        //while
        int counter = 0;
        while (counter < 20) {
            System.out.println("Still running loop" + counter);
            counter++;
        }

        //do-while
        do {
            System.out.println("\nBody will run at least once");
        } while (false);
//
//        //continue
        for (int i = 0; i < 10; i++) {
            System.out.print("enter: " + i);
            if (i > 5) {
                System.out.println(" & continue: ");
                continue;
            }
            System.out.println(" & exit: ");
        }

        //2x Loop
        for (int i = 1; i <= 10; i++) {
            for (int j = 1; j <= 10; j++) {
                System.out.print("\t" + (i * j));
            }
            System.out.println("\n");
        }
    }
}
```

#### E05_Arrays.java

```java
public class E05_Arrays {
    public static void main(String[] args) {
        //initialize variable
        int[] anArray;
        // allocates memory for 10 integers
        anArray = new int[10];

        // initialize first element
        anArray[0] = 100;
        // initialize second element
        anArray[1] = 200;
        // and so forth
        anArray[2] = 300;

        //shortcut syntax to create and initialize an array:
        int[] anArray2 = {100, 200, 300, 400, 500, 600, 700, 800, 900, 1000};
        System.out.println(anArray2.length);

        int c = anArray2[anArray2.length - 1];

        int[] anArray3 = new int[10];
        for (int i = 0; i < anArray3.length; i++) {
            anArray3[i] = 100 * (i + 1);
        }
    }
}

class MultiDimArrayDemo {
    public static void main(String[] args) {
        int[][] multiplicationMatrix = new int[10][10];
        //2x Loop
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                multiplicationMatrix[i][j] = i * j;
                System.out.print("\t" + (i * j));
            }
            System.out.println("\n");
        }

        String[][] names = {
                {"Mr. ", "Mrs. ", "Ms. "},
                {"Smith", "Jones"}
        };
// Mr. Smith
        System.out.println(names[0][0] + names[1][0]);
// Ms. Jones
        System.out.println(names[0][2] + names[1][1]);
    }
}


class ArrayCopyDemo {
    public static void main(String[] args) {
        char[] copyFrom = {'d', 'e', 'c', 'a', 'f', 'f', 'e',
                'i', 'n', 'a', 't', 'e', 'd'};
        char[] copyTo = new char[7];

        System.arraycopy(copyFrom, 2, copyTo, 0, 7);
        System.out.println(new String(copyTo));
    }
}

class ArraysUtil {
    public static void main(String[] args) {
        char[] copyFrom = {'d', 'e', 'c', 'a', 'f', 'f', 'e',
                'i', 'n', 'a', 't', 'e', 'd'};
        char[] copyTo = java.util.Arrays.copyOfRange(copyFrom, 2, 9);
        System.out.println(new String(copyTo));
    }
}
```

#### E06_WrapperClasses.java

```java
public class E06_WrapperClasses {

    public static void main(String[] args) {
        //  byte data type
        byte a = 1;

        // wrapping around Byte object
        Byte byteobj = new Byte(a);

        // int data type
        int b = 10;

        //wrapping around Integer object
        Integer intobj = new Integer(b);

        // float data type
        float c = 18.6f;

        // wrapping around Float object
        Float floatobj = new Float(c);

        // double data type
        double d = 250.5;

        // Wrapping around Double object
        Double doubleobj = new Double(d);

        // char data type
        char e = 'a';

        // wrapping around Character object
        Character charobj = e;

        // objects to data types (retrieving data types from objects)
        // unwrapping objects to primitive data types
        byte bv = byteobj;
        int iv = intobj;
        float fv = floatobj;
        double dv = doubleobj;
        char cv = charobj;
    }
}
```

Author of examples [Taras Teslyuk](https://github.com/TeslyukTaras/Java_Lecture1/tree/master/src).

### Task:

Реалізувати Java програму, яка обчислює наступні вирази та виводить результат у консоль.
Присвоїти змінній A значення суми квадратів чисел від 3 до 9.
A = 3^2 + 4^2 + … + 9^2
Присвоїти змінній B значення добутку чисел від 2 до 8.
B = 2 * 3 * … *8
Присвоїти змінній C значення суми чисел A та B.
У домашньому завданні треба вивести у консоль значення A, B та С.


### Realization:

```java
import java.lang.Math;

class Task1 {
    public static void main(String[] args) {

        int[] resultInt = way1();
        System.out.println(resultInt[0]+ " " + resultInt[1] + " " + resultInt[2]);

        double[] resultDouble = way2();
        System.out.println(resultDouble[0]+ " " + resultDouble[1] + " " + resultDouble[2]);
    }

    private static int[] way1() {
        int a = 3*3 + 4*4 + 5*5 + 6*6 + 7*7 + 8*8 + 9*9;

        int b = 2*3*4*5*6*7*8;

        int c = a + b;

        return new int[] {a, b, c};
    }

    private static double[] way2(){
        double a = 0.0;
        for(double i = 3.0; i <=9; i++) a += Math.pow(i, 2.0);

        double b = 2.0;
        for(int i = 3; i <= 8; i++) b *= (double)i;

        double c = a + b;

        return new double[] {a, b, c};
    }
}   
```

### Output

```
280 40320 40600
280.0 40320.0 40600.0
```