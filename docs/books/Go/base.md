---
title: go基础
date: 2023/11/24
---
## 介绍

* Go 语言是一门编译语言
  * 在你运行程序之前，Go 首先使用编译器把你的代码转换成机器能够读懂的 1 和 0
  * 它会把你所有的代码编译成一个可执行文件，在编译的过程中，Go编译器能够捕获一些错误
* 不是所有的编程语言都使用这种方式
  * Python、Ruby 等很多语言都是使用解释器，随着程序的运行，一个语句一个语句的进行翻译。但这也意味着 bug 可能就潜伏在你还没有测试过的路径上，这些就是解释型语言

## 基础语法

### 运算符

Go 提供了 *+，-，*，/，%等运算符

注意Go中没有类似于Java中 `++i`这种自增运算符，可以使用 `i++`

```go
package main

import "fmt"

func main() {
	fmt.Println(1 + 1) // 2
	fmt.Println(2 - 1) // 1
	fmt.Println(2 * 2) // 4
	fmt.Println(4 / 2) // 2
	fmt.Println(4 % 3) // 1
}
```

### fmt.Print & fmt.Println & fmt.Printf

Print，Println 函数：

* 可以传递若干个参数，之间用逗号分开
* 参数可以是字符串、数字、数学表达式等等

与 Print 和 Println 不同，Printf 的第一个参数必须是字符串

* 这个字符串里包含了像 %v 这样的格式化动词，它的值由第二个参数的值所代替
* 如果指定了多个格式化动词，那么它们的值由后边的参数值按其顺序进行替换

```go
package main

import "fmt"

// 使用Printf对齐文本
func main() {
	/*
	   在格式化动词里指定宽度，就可以对齐文本。
	   例如，%4v，就是向左填充到足够4个宽度
	   正数，向左填充空格
	   负数，向右填充空格
	*/
	fmt.Printf("%-15v $%4v\n", "SpaceX", 94)
	fmt.Printf("%-15v $%4v\n", "Virgin Galactic", 100)
}
```

![1700880012846](image/base/1700880012846.png)

### 变量 & 常量

const，用来声明常量，常量的值不可以改变

var，用来声明变量，想要使用变量首先需要进行声明

### 分支 & 循环

if 分支

```go
package main

import "fmt"

func main() {
	var scores int = 88

	if 0 <= scores && scores < 60 {
		fmt.Println("不及格")
	} else if 60 <= scores && scores < 90 {
		fmt.Println("良好")
	} else if 90 < scores {
		fmt.Println("优秀")
	} else {
		fmt.Println("成绩不合法")
	}
}
```

switch 分支

* switch 还有一个 fallthrough 关键字，它用来执行下一个 case 的 body 部分

```go
package main

import "fmt"

func main() {
	var scores int = 88

	switch {
	case 0 <= scores && scores < 60:
		fmt.Println("不及格")
	case 60 <= scores && scores < 90:
		fmt.Println("良好")
		fallthrough
	case 90 <= scores:
		if scores < 90 {
			fmt.Printf("您还差%v分就可以达到优秀程度，请继续加油", 90-scores)
		} else {
			fmt.Println("优秀")
		}
	default:
		fmt.Println("成绩不合法")
	}
}
```

循环

```go
package main

import "fmt"

// 计算1~10的和
func main() {
	sum := 0
	for i := 1; i <= 10; i++ {
		sum += i
	}
	fmt.Println("sum = ", sum) // 55
}
```

## 数据类型

### 浮点型

* 默认是 float64
  * 64 位的浮点类型
  * 占用 8 字节内存
  * 某些编程语言把这种类型叫做 double（双精度）
* float32
  * 占用 4 字节内存
  * 精度比 float64 低
  * 有时叫做单精度类型

### 整数型

![1700882244368](image/base/1700882244368.png)

int 和 uint

* int 和 uint 是针对目标设备优化的类型
* 在树莓派 2、比较老的移动设备上，int 和 uint 都是 32 位的
* 在比较新的计算机上，int 和 uint 都是 64 位的
* 虽然在某些设备上 int 可以看作是 int32，在某些设备上 int 可以看作是 int64，但它们其实是 3 种不同的类型

### Big 包

* 对于较大的整数（超过1018 ）：big.Int，一旦使用了 big.Int，那么等式里其它的部分也必须使用 big.Int
* 对于任意精度的浮点类型，big.Float
* 对于分数，big.Rat

```go
package main

import (
	"fmt"
	"math/big"
)

func main() {
	// NewInt() 函数可以把 int64 转化为 big.Int 类型
	lightSpeed := big.NewInt(299792)
	secondsPerDay := big.NewInt(86400)
	fmt.Println(lightSpeed, secondsPerDay)

	distance := new(big.Int)
	distance.SetString("2400000000000000000", 10) // 以10进制表示
	fmt.Println("Andromeda Galaxy is ", distance)

	seconds := new(big.Int)
	seconds.Div(distance, lightSpeed)

	days := new(big.Int)
	days.Div(seconds, secondsPerDay)

	fmt.Println("That is", days, "days of travel at light speed")
}
```

## string

声明：

* `peace := "peace"`
* `var peace = "peace"`
* `var peace string = "peace"`

### 字符串字面值 & 原始字符串字面值

字符串字面值可以包含转义字符，例如 \n，但如果你确实想得到 \n 而不是换行的话，可以使用 ` 来代替 “，这叫做原始字符串字面值。

```go
package main

import "fmt"

func main() {
	str1 := "字符串字面值\n"
	str2 := `字符串原始值\n`
	fmt.Printf(str1)
	fmt.Printf(str2)
}
```

![1700885529054](image/base/1700885529054.png)

## 函数

在 Go 里，使用 func 关键字声明函数，大写字母开头的函数、变量或其它标识符都会被导出，对其它包可用，小写字母开头的就不行

![1700897655113](image/base/1700897655113.png)

函数可以有多个参数，如果多个形参类型相同，那么该类型只写一次即可

```go
func Unix(sec int64, nsec int64) Time
func Unix(sec, nsec int64) Time
```

函数可以有多个返回值，函数的多个返回值需要用括号括起来。声明函数时可以把名字去掉，只保留类型

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	countdown, err := strconv.Atoi("10")
	if err == nil {
		fmt.Println(countdown)
	}
}

func Atoi(s string) (int, error) {....}
```

函数的参数数量是可变的，… 和空接口组合到一起就可以接受任意数量、类型的参数，比如Println函数

```go
// Println函数的声明
// ... 表示函数的参数的数量是可变的 
参数 a 的类型为 interface{}，是一个空接口

func Println(a ...interface{}) (n int, err error) {
	return Fprintln(os.Stdout, a...)
}
```

## 方法

在 C#、Java 里，方法属于类。在 Go 里，它提供了方法，但是没提供类和对象

可以将方法与同包中声明的任何类型相关联，但不可以是 int、float64 等预声明的类型进行关联

![1700899888749](image/base/1700899888749.png)

```go
package main

import "fmt"

func main() {
	var k kelvin = 294.0
	var c celsius

	c = kelvinToCelsius(k) // 调用函数
	c = k.celsius()        // 调用方法

	fmt.Println(c) // 20.850000000000023
}

// 给类型声明别名，但不可以和原类型混用
type kelvin float64
type celsius float64

// 函数
func kelvinToCelsius(k kelvin) celsius {
	return celsius(k - 273.15)
}

// 方法，接收者是kelvin
func (k kelvin) celsius() celsius {
	return celsius(k - 273.15)
}
```

## 一等函数

* 在 Go 里，函数是头等的，它可以用在整数、字符串或其它类型能用的地方:
  * 将函数赋给变量
    ```go
    package main

    import (
    	"fmt"
    	"math/rand"
    )

    func main() {
    	// 变量 sensor 就是一个函数，而不是函数执行的结果
    	// 这个变量的类型是函数，该函数没有参数，返回一个 kelvin 类型的值。
    	sensor := fakeSensor
    	fmt.Println(sensor())

    	sensor = realSensor
    	fmt.Println(sensor())
    }

    type kelvin float64

    func fakeSensor() kelvin {
    	return kelvin(rand.Intn(151) + 150)
    }

    func realSensor() kelvin {
    	return 0
    }
    ```
  * 将函数作为参数传递给函数
  * 将函数作为函数的返回类型

## 数组

数组是一种固定长度且有序的元素集合

* 数组中的每个元素都可以通过[ ] 和一个从 0 开始的索引进行访问
* 数组的长度可由内置函数 len 来确定
* 在声明数组时，未被赋值元素的值是对应类型的零值

```go
package main

import "fmt"

func main() {
	// 声明并初始化
	arr := [5]int{1, 2, 3, 4, 5}

	// for 遍历数组
	for i := 0; i < len(arr); i++ {
		fmt.Printf("%d\t", arr[i])
	}
	fmt.Println()
	// range 遍历数组
	for _, value := range arr {
		fmt.Printf("%d\t", value)
	}
}
```

## slice

指向数组的窗口，切分数组不会导致数组被修改，它只是创建了指向数组的一个窗口或视图，这种视图就是 slice 类型

* Slice 使用的是半开区间
* Slice 的默认索引
  * 忽略掉 slice 的起始索引，表示从数组的起始位置进行切分
  * 忽略掉 slice 的结束索引，相当于使用数组的长度作为结束索引
  * 如果同时省略掉起始和结束索引，那就是包含数组所有元素的一个 slice
  * 注意：slice 的索引不能是负数

```go
package main

import "fmt"

func main() {
	// 声明并初始化
	arr := [5]int{1, 2, 3, 4, 5}

	s := arr[:3]
	printArr(dwarf) // 1       2       3

	s = arr[3:]
	printArr(dwarf) // 4       5

	s = arr[:]
	printArr(dwarf) // 1       2       3       4       5

}

func printArr(arr []int) {
	for i := 0; i < len(arr); i++ {
		fmt.Printf("%d\t", arr[i])
	}
	fmt.Println()
}
```

## map

map 是 Go 提供的另外一种集合：

* 它可以将 key 映射到 value
* 可快速通过 key 找到对应的 value
* 它的 key 几乎可以是任何类型

声明 map，必须指定 key 和 value 的类型：

![1700903472999](image/base/1700903472999.png)


## struct

为了将分散的零件组成一个完整的结构体，Go 提供了 struct 类型。struct 允许你将不同类型的东西组合在一起。



## 组合与转发


## 接口


## 指针


## nil


## Error



## goroutine


## channel


## 并发状态
