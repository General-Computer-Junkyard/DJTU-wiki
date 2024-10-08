import{_ as a,c as n,a0 as p,o as e}from"./chunks/framework.DDvRCNFD.js";const u=JSON.parse('{"title":"Special type /Generics","description":"","frontmatter":{},"headers":[],"relativePath":"language/rust/13.special-type-or-generics.md","filePath":"language/rust/13.special-type-or-generics.md"}'),l={name:"language/rust/13.special-type-or-generics.md"};function i(t,s,o,c,d,r){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="special-type-generics" tabindex="-1">Special type /Generics <a class="header-anchor" href="#special-type-generics" aria-label="Permalink to &quot;Special type /Generics&quot;">​</a></h1><p>特型和泛型</p><p>泛型是一种在编程中定义函数、结构体、枚举和方法的方式，使它们能够处理多种数据类型，而不是单一数据类型。</p><p>Rust的泛型功能提供了类型安全的方式来复用代码，使得代码既具有抽象性又具有强类型安全。</p><p>泛型的主要优势是它可以减少代码重复。例如，如果你有两个函数，一个处理<code>i32</code>列表，另一个处理<code>f64</code>列表，它们的功能完全相同，除了操作的数据类型不同。使用泛型，你可以写一个函数来处理任何数据类型的列表。</p><p>当你使用泛型，Rust 在编译时为每个具体的类型生成代码，这被称为单态化</p><p><strong>使用泛型</strong></p><ol><li><p><strong>泛型数据类型</strong></p><p>在函数签名中，使用尖括号<code>&lt;&gt;</code>来定义泛型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn largest&lt;T&gt;(list: &amp;[T]) -&gt; T {</span></span>
<span class="line"><span>    // ... function body ...</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><strong>结构体和枚举中的泛型</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>struct Point&lt;T&gt; {</span></span>
<span class="line"><span>    x: T,</span></span>
<span class="line"><span>    y: T,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>enum Option&lt;T&gt; {</span></span>
<span class="line"><span>    Some(T),</span></span>
<span class="line"><span>    None,</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><strong>方法定义中的泛型</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>impl&lt;T&gt; Point&lt;T&gt; {</span></span>
<span class="line"><span>    fn x(&amp;self) -&gt; &amp;T {</span></span>
<span class="line"><span>        &amp;self.x</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ol><p><strong>泛型的优势</strong></p><ol><li><strong>代码重用</strong>：你只需要编写一个版本的函数或数据类型，而不是为每种数据类型编写多个版本。</li><li><strong>类型安全</strong>：泛型确保你的代码可以处理的每种数据类型都是类型安全的。</li><li><strong>运行时性能</strong>：Rust使用一种称为单态化的技术来实现泛型，这意味着使用泛型的Rust代码与使用具体类型的代码在运行时具有相同的性能。</li></ol><h4 id="特型" tabindex="-1">特型 <a class="header-anchor" href="#特型" aria-label="Permalink to &quot;特型&quot;">​</a></h4><p>特性（Traits）是一种定义在多个类型上共享的行为的方式。你可以将特性视为一种类似于其他语言中的接口的东西。通过特性，你可以定义一组方法的签名，然后为特定类型实现这些方法。</p><p><strong>定义特性</strong></p><p>下面是一个特性的定义示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>trait Speak {</span></span>
<span class="line"><span>    fn speak(&amp;self);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这定义了一个名为 <code>Speak</code> 的特性，它要求实现了此特性的类型提供一个 <code>speak</code> 方法。</p><p><strong>为类型实现特性</strong></p><p>接下来，我们为 <code>Human</code> 和 <code>Dog</code> 类型实现这个特性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>struct Human {</span></span>
<span class="line"><span>    name: String,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>struct Dog {</span></span>
<span class="line"><span>    breed: String,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>impl Speak for Human {</span></span>
<span class="line"><span>    fn speak(&amp;self) {</span></span>
<span class="line"><span>        println!(&quot;Hello, my name is {}.&quot;, self.name);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>impl Speak for Dog {</span></span>
<span class="line"><span>    fn speak(&amp;self) {</span></span>
<span class="line"><span>        println!(&quot;Woof! I am a {}.&quot;, self.breed);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在，我们可以对 <code>Human</code> 和 <code>Dog</code> 实例调用 <code>speak</code> 方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let person = Human { name: String::from(&quot;Alice&quot;) };</span></span>
<span class="line"><span>let dog = Dog { breed: String::from(&quot;Golden Retriever&quot;) };</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>person.speak();</span></span>
<span class="line"><span>dog.speak();</span></span></code></pre></div><p>输出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Hello, my name is Alice.</span></span>
<span class="line"><span>Woof! I am a Golden Retriever.</span></span></code></pre></div><p><strong>特性边界</strong></p><p>特性还可以用于泛型和特性边界，这允许我们在函数和方法中指定类型参数必须实现哪些特性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn introduce&lt;T: Speak&gt;(entity: T) {</span></span>
<span class="line"><span>    entity.speak();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里，<code>introduce</code> 函数可以接受任何实现了 <code>Speak</code> 特性的类型。</p><h4 id="泛型编程对类型参数的约束要求" tabindex="-1">泛型编程对类型参数的约束要求 <a class="header-anchor" href="#泛型编程对类型参数的约束要求" aria-label="Permalink to &quot;泛型编程对类型参数的约束要求&quot;">​</a></h4><p>泛型编程中，我们有时需要对类型参数施加约束以确保它们具有某些特定的功能或行为。在Rust中，这些约束是通过特性来实施的。</p><p>考虑以下示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn print_info&lt;T&gt;(item: T) {</span></span>
<span class="line"><span>    println!(&quot;The value is: {}&quot;, item);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上述函数试图为任何类型的<code>item</code>打印信息，但编译器会抛出一个错误，因为它不知道<code>T</code>是否支持<code>{}</code>格式说明符。我们需要确保<code>T</code>实现了<code>std::fmt::Display</code>特性。</p><p>为了修复这个问题，我们可以添加一个约束，指定<code>T</code>必须实现<code>Display</code>特性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn print_info&lt;T: std::fmt::Display&gt;(item: T) {</span></span>
<span class="line"><span>    println!(&quot;The value is: {}&quot;, item);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个新版本中，<code>T: std::fmt::Display</code>是一个约束，它指定<code>T</code>必须实现<code>Display</code>特性。</p><p>我们还可以对多个类型参数添加约束，或者要求类型实现多个特性。例如，如果我们需要一个函数处理两种类型，并确保它们都可以显示和比较，我们可以这样写：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn compare_and_display&lt;T: std::fmt::Display + std::cmp::PartialOrd, U: std::fmt::Display + std::cmp::PartialOrd&gt;(t: T, u: U) {</span></span>
<span class="line"><span>    if t &lt; u {</span></span>
<span class="line"><span>        println!(&quot;{} is less than {}&quot;, t, u);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        println!(&quot;{} is greater than or equal to {}&quot;, t, u);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>此外，Rust还提供了<code>where</code>子句，让我们可以更清晰地表示复杂的约束：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn compare_and_display&lt;T, U&gt;(t: T, u: U)</span></span>
<span class="line"><span>where</span></span>
<span class="line"><span>    T: std::fmt::Display + std::cmp::PartialOrd,</span></span>
<span class="line"><span>    U: std::fmt::Display + std::cmp::PartialOrd,</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // function body remains the same</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这些约束确保我们在泛型函数或结构体中使用的类型具有必要的功能，从而保证代码的正确性和安全性。</p><h4 id="使用-约束的泛型结构化数据类型" tabindex="-1">使用：约束的泛型结构化数据类型 <a class="header-anchor" href="#使用-约束的泛型结构化数据类型" aria-label="Permalink to &quot;使用：约束的泛型结构化数据类型&quot;">​</a></h4><p>在Rust中，我们不仅可以在函数中使用带有约束的泛型，还可以在结构体、枚举和方法中使用带有约束的泛型。</p><p>以下是如何在结构体中使用带约束的泛型的示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>struct Pair&lt;T: std::fmt::Display + std::cmp::PartialOrd&gt; {</span></span>
<span class="line"><span>    first: T,</span></span>
<span class="line"><span>    second: T,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>impl&lt;T: std::fmt::Display + std::cmp::PartialOrd&gt; Pair&lt;T&gt; {</span></span>
<span class="line"><span>    fn larger(&amp;self) -&gt; &amp;T {</span></span>
<span class="line"><span>        if self.first &gt; self.second {</span></span>
<span class="line"><span>            &amp;self.first</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            &amp;self.second</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    fn display_pair(&amp;self) {</span></span>
<span class="line"><span>        println!(&quot;The pair is: {} and {}&quot;, self.first, self.second);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let pair_of_ints = Pair { first: 5, second: 10 };</span></span>
<span class="line"><span>    pair_of_ints.display_pair();</span></span>
<span class="line"><span>    println!(&quot;The larger number is: {}&quot;, pair_of_ints.larger());</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在上面的例子中，我们定义了一个泛型结构体<code>Pair&lt;T&gt;</code>，其中<code>T</code>的类型必须实现<code>Display</code>和<code>PartialOrd</code>特性。这意味着我们可以比较两个<code>T</code>类型的值，并可以打印它们。</p><p>我们还为这个结构体实现了两个方法：</p><ul><li><code>larger()</code>方法返回两个值中较大的那个。</li><li><code>display_pair()</code>方法显示这对值。</li></ul><p>这些约束确保我们在<code>Pair&lt;T&gt;</code>结构体中使用的类型具有必要的功能。</p><p>使用约束的泛型结构体和枚举允许我们编写更灵活、更通用的代码，同时确保类型安全。</p><h4 id="特型约束的泛型类型" tabindex="-1">特型约束的泛型类型 <a class="header-anchor" href="#特型约束的泛型类型" aria-label="Permalink to &quot;特型约束的泛型类型&quot;">​</a></h4><p>在Rust中，特性（Traits）用于定义共享的行为。当我们想要对泛型类型施加约束时，特性非常有用。我们可以使用特性来定义一个需要满足的行为集合，然后通过特性约束来要求泛型类型满足这些行为。</p><p>以下是使用特性约束的泛型类型的示例：</p><p><strong>1. 定义一个特性：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>trait Printable {</span></span>
<span class="line"><span>    fn format(&amp;self) -&gt; String;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个<code>Printable</code>特性有一个方法<code>format</code>，返回一个<code>String</code>。</p><p><strong>2. 为现有类型实现这个特性：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>impl Printable for i32 {</span></span>
<span class="line"><span>    fn format(&amp;self) -&gt; String {</span></span>
<span class="line"><span>        format!(&quot;i32: {}&quot;, *self)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>impl Printable for String {</span></span>
<span class="line"><span>    fn format(&amp;self) -&gt; String {</span></span>
<span class="line"><span>        format!(&quot;String: {}&quot;, *self)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们为<code>i32</code>和<code>String</code>类型实现了<code>Printable</code>特性。</p><p><strong>3. 使用特性约束的泛型函数</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn print_item&lt;T: Printable&gt;(item: T) {</span></span>
<span class="line"><span>    println!(&quot;{}&quot;, item.format());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>// 或使用 where 语法：</span></span>
<span class="line"><span>// fn print_item&lt;T&gt;(item: T) where T: Printable {</span></span>
<span class="line"><span>//     println!(&quot;{}&quot;, item.format());</span></span>
<span class="line"><span>// }</span></span></code></pre></div><p>这个函数<code>print_item</code>接受一个类型为<code>T</code>的参数，其中<code>T</code>必须实现<code>Printable</code>特性。</p><p><strong>4. 使用这个函数：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let a: i32 = 123;</span></span>
<span class="line"><span>    let b: String = &quot;hello&quot;.to_string();</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    print_item(a); // 输出 &quot;i32: 123&quot;</span></span>
<span class="line"><span>    print_item(b); // 输出 &quot;String: hello&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>请注意，如果我们尝试使用未实现<code>Printable</code>特性的类型作为<code>print_item</code>函数的参数，编译器会报错。这是因为我们通过特性约束确保了类型<code>T</code>必须实现<code>Printable</code>特性。</p><h4 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h4><p>在面向对象（oop）的语言中，有这四大特点，通常被称为OOP的“四大柱”，它们是：</p><ol><li><strong>封装</strong>（Encapsulation）：将数据（属性）和操作这些数据的函数（方法）组织到单一的“对象”实体中，并控制对这些数据的访问，确保对象的状态在任何时候都保持有效。</li><li><strong>继承</strong>（Inheritance）：允许定义一个类（子类、派生类）来继承另一个类（父类、基类）的属性和方法。这有助于代码重用，并允许使用已存在的类作为新类的基础。</li><li><strong>多态</strong>（Polymorphism）：允许使用一个接口来表示多种数据类型。在OOP中，这通常意味着子类对象可以被视为其父类对象，但具体的方法调用会根据对象的实际类型在运行时解析。</li><li><strong>抽象</strong>（Abstraction）：隐藏复杂的实现细节，只向外界提供功能的高级概述。在OOP中，这经常通过定义抽象类或接口来实现，这些抽象类或接口为派生类提</li></ol><p>继承&quot;是一种机制，其中一个类可以从另一个类继承属性和方法。这允许新类（通常称为子类或派生类）基于现有的类（称为父类或基类）来创建，从而实现代码重用和建立一个类型层次结构。</p><p><strong>继承的主要特点是：</strong></p><ol><li>代码重用：子类可以重用父类的代码，无需重新编写。</li><li>子类可以扩展或覆盖父类的行为：子类可以添加新方法或重写从父类继承的方法。</li><li>多态：允许将子类对象视为其父类的实例。例如，如果有一个父类Animal和一个子类Dog，那么一个Dog对象也可以被视为一个Animal对象。</li></ol><p>但是继承会有问题，比如c++著名的“砖石问题”</p><p><strong>著名的“钻石问题”</strong></p><p>C++的“菱形问题”（Diamond Problem）是多重继承中一个经典的问题。它发生在当一个类从两个分开的类继承，而这两个类又继承自同一个基类时。</p><p>这是一个简化的例子来说明这个问题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    A</span></span>
<span class="line"><span>   / \\</span></span>
<span class="line"><span>  B   C</span></span>
<span class="line"><span>   \\ /</span></span>
<span class="line"><span>    D</span></span></code></pre></div><p>在这里，类<code>D</code>继承自<code>B</code>和<code>C</code>，而<code>B</code>和<code>C</code>都继承自<code>A</code>。</p><p>问题来了：当你从<code>D</code>的一个对象中访问一个在<code>A</code>中定义的方法或属性时，应该使用哪一个版本？是从<code>B</code>继承的版本还是从<code>C</code>继承的版本？</p><p>这种不确定性可能会导致各种问题，包括歧义、不一致和其他难以预测的行为。</p><p>为了解决这个问题，C++引入了“虚继承”（virtual inheritance）。通过虚继承，基类<code>A</code>在派生类<code>D</code>中只有一个单独的实例，从而消除了歧义。</p><p>使用虚继承的代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class A { /* ... */ };</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>class B : virtual public A { /* ... */ };</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>class C : virtual public A { /* ... */ };</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>class D : public B, public C { /* ... */ };</span></span></code></pre></div><p>虽然虚继承解决了菱形问题，但它也引入了额外的复杂性和开销。因此，在设计C++类时，应该谨慎使用多重继承，并只在确实需要时使用虚继承。</p><p><strong>rust特有的继承</strong></p><p>Rust不支持传统的类继承。相反，Rust使用特性（Traits）和组合来实现代码共享和多态。这是一个更灵活和明确的方法，可以避免继承中常见的一些问题，如“钻石问题”（当多个继承路径导致一个类有多个父类的同名方法时）。</p><p>在Rust中，你不会创建一个类来“继承”另一个类的属性和方法。而是定义特性来描述共享的行为，然后为不同的类型实现这些特性。组合和特性提供了一种在没有传统继承的语言中实现代码复用和多态的方法。</p><p>Rust中，没有像其他面向对象编程语言（如Java或C++）中那样的传统的类继承。相反，Rust采用了基于特性（Traits）的系统来实现代码共享和组合。</p><p>但通过使用特性，你可以实现类似继承的行为。以下是如何使用Rust的特性来实现这种模式：</p><ul><li><strong>定义特性</strong>：特性允许你定义一组方法，这些方法可以在其他类型上实现。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>trait Speak {</span></span>
<span class="line"><span>    fn speak(&amp;self);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>为特定类型实现特性</strong>：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>struct Human;</span></span>
<span class="line"><span>impl Speak for Human {</span></span>
<span class="line"><span>    fn speak(&amp;self) {</span></span>
<span class="line"><span>        println!(&quot;Hello!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>struct Dog;</span></span>
<span class="line"><span>impl Speak for Dog {</span></span>
<span class="line"><span>    fn speak(&amp;self) {</span></span>
<span class="line"><span>        println!(&quot;Woof!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>使用特性作为约束</strong>：这使得函数或方法可以接受任何实现了某个特性的类型。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn make_it_speak&lt;T: Speak&gt;(entity: T) {</span></span>
<span class="line"><span>    entity.speak();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>虽然这不是传统意义上的继承，但Rust的特性系统提供了一种非常强大和灵活的方式来共享和组合代码，而不必担心继承带来的复杂性和可能的问题。</p><p>此外，Rust还支持为特性提供默认方法，这意味着当一个类型实现了该特性但没有为某个方法提供具体实现时，将使用该默认方法。这为代码复用提供了另一种方式，类似于某些面向对象语言中的接口默认方法或抽象类的行为。</p><p>通过一个例子来展示这一点：</p><p>假设我们有两种飞行物体：Bird 和 Aeroplane。它们都可以飞行，但它们不是通过继承来共享这个能力，而是通过实现一个共同的特性 Fly。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 定义一个 Fly 特性，它有一个方法 named fly</span></span>
<span class="line"><span>trait Fly {      //这行代码开始定义一个名为 Fly 的特性。</span></span>
<span class="line"><span>    fn fly(&amp;self);         //这定义了一个名为 fly 的方法，该方法采用 &amp;self 作为参数。此方法在特性内没有具体实现，意味着任何实现此特性的类型都需要提供此方法的具体实现。</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>// 定义一个 Bird 结构体</span></span>
<span class="line"><span>struct Bird {           //开始定义一个名为 Bird 的结构体。</span></span>
<span class="line"><span>    kind: String,       //定义结构体 Bird 有一个名为 kind 的字段，其类型为 String</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>// 为 Bird 实现 Fly 特性</span></span>
<span class="line"><span>impl Fly for Bird {</span></span>
<span class="line"><span>    fn fly(&amp;self) {</span></span>
<span class="line"><span>        println!(&quot;The {} flaps its wings!&quot;, self.kind);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>// 定义一个 Aeroplane 结构体</span></span>
<span class="line"><span>struct Aeroplane {</span></span>
<span class="line"><span>    model: String,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>// 为 Aeroplane 实现 Fly 特性</span></span>
<span class="line"><span>impl Fly for Aeroplane {</span></span>
<span class="line"><span>    fn fly(&amp;self) {</span></span>
<span class="line"><span>        println!(&quot;The {} roars down the runway!&quot;, self.model);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let sparrow = Bird { kind: String::from(&quot;Sparrow&quot;) };    //创建一个 Bird 实例并给它的 kind 字段赋值为 &quot;Sparrow&quot;。</span></span>
<span class="line"><span>    let boeing = Aeroplane { model: String::from(&quot;Boeing 747&quot;) };  //创建一个 Aeroplane 实例并给它的 model 字段赋值为 &quot;Boeing 747&quot;。</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>sparrow.fly(); // 输出: The Sparrow flaps its wings!调用 sparrow (Bird 实例) 的 fly 方法。</span></span>
<span class="line"><span>boeing.fly();  // 输出: The Boeing 747 roars down the runway!调用 boeing (Aeroplane 实例) 的 fly</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如上所示，我们没有从一个 &quot;base class&quot; 继承 Bird 和 Aeroplane。相反，我们为每种类型分别实现了 Fly 特性，这使得每种类型都可以有自己的 fly 方法实现。</p><p>这种方法允许我们为不同的类型定制飞行行为，同时确保所有实现了 Fly 特性的类型都有一个 fly 方法。这就是 Rust 中的 &quot;继承&quot;：通过特性和实现，而不是传统的面向对象继承</p><h4 id="核心特型" tabindex="-1">核心特型 <a class="header-anchor" href="#核心特型" aria-label="Permalink to &quot;核心特型&quot;">​</a></h4><p>Rust 不支持传统的面向对象语言中的 &quot;类继承&quot;。Rust 的设计者们故意选择不包含这个特性，因为经典的继承有时会导致复杂性和易出错的代码。取而代之，Rust 采用了组合、特性和特性对象，它们可以实现继承的大部分用途，但在语义上更为明确。</p><p>组合（Composition）：你可以使用一个类型作为另一个类型的字段。这种 &quot;has-a&quot; 关系允许你重用一个类型的部分功能。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>struct Engine {</span></span>
<span class="line"><span>    // ... engine properties and methods</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>struct Car {</span></span>
<span class="line"><span>    engine: Engine,</span></span>
<span class="line"><span>    // ... other car properties and methods</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的例子中，Car 有一个 Engine。这是组合的一个简单例子。</p><p>特性（Traits）：这是 Rust 的一个核心特性，允许你为某个类型定义行为。它类似于其他语言中的接口。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>trait Drive {</span></span>
<span class="line"><span>    fn drive(&amp;self);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>impl Drive for Car {</span></span>
<span class="line"><span>    fn drive(&amp;self) {</span></span>
<span class="line"><span>        println!(&quot;Car is driving!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这里，我们定义了一个 Drive 特性，并为 Car 类型实现了这个特性。任何实现了 Drive 特性的类型都必须提供 drive 方法的具体实现。</p><p>特性对象（Trait Objects）：当你需要在不同类型之间共享功能时，特性对象是非常有用的。它们允许你使用动态分发来调用特定类型的正确方法实现。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>​</span></span>
<span class="line"><span>fn do_drive(d: &amp;dyn Drive) {</span></span>
<span class="line"><span>    d.drive();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>let my_car = Car { /* ... */ };</span></span>
<span class="line"><span>do_drive(&amp;my_car);</span></span></code></pre></div><p>这里，do_drive 函数接受一个实现了 Drive 特性的对象引用，并调用其 drive 方法。</p><p>通过使用组合、特性和特性对象，你可以在 Rust 中实现大部分传统继承所能提供的功能，但以一种更为明确和灵活的方式。</p><h4 id="特型对象" tabindex="-1">特型对象 <a class="header-anchor" href="#特型对象" aria-label="Permalink to &quot;特型对象&quot;">​</a></h4><p>特性对象（Trait Objects）是 Rust 中的一个动态分发机制，允许在运行时处理不同类型的值，只要它们都实现了某个共同的特性。这与许多其他语言中的多态是类似的。特性对象最常见的用法是在你需要存储或操作实现了某特性的不同类型的集合时。</p><p>让我们通过一些示例来深入了解特性对象：</p><ol><li><p><strong>定义一个特性</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>trait Drawable {</span></span>
<span class="line"><span>    fn draw(&amp;self);</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><strong>为不同的类型实现这个特性</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>struct Circle {</span></span>
<span class="line"><span>    radius: f64,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>impl Drawable for Circle {</span></span>
<span class="line"><span>    fn draw(&amp;self) {</span></span>
<span class="line"><span>        println!(&quot;Drawing a circle with radius {}&quot;, self.radius);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>struct Square {</span></span>
<span class="line"><span>    side: f64,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>impl Drawable for Square {</span></span>
<span class="line"><span>    fn draw(&amp;self) {</span></span>
<span class="line"><span>        println!(&quot;Drawing a square with side {}&quot;, self.side);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><strong>使用特性对象</strong>：</p><p>如果你想要一个包含不同类型（但都实现了 <code>Drawable</code> 特性）的向量，你可以使用特性对象来达到这个目的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let shapes: Vec&lt;Box&lt;dyn Drawable&gt;&gt; = vec![</span></span>
<span class="line"><span>    Box::new(Circle { radius: 1.0 }),</span></span>
<span class="line"><span>    Box::new(Square { side: 2.0 }),</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>for shape in shapes {</span></span>
<span class="line"><span>    shape.draw();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意，我们使用 <code>Box&lt;dyn Drawable&gt;</code> 类型来声明我们的向量。这是因为 Rust 需要知道特性对象的确切大小，而 <code>Box</code> 提供了一个已知大小的指针。<code>dyn</code> 关键字是表示 &quot;这是一个特性对象&quot; 的明确标志。</p></li></ol><p><strong>优势</strong>：</p><ul><li>特性对象允许你在运行时处理多种不同类型的值，只要它们都实现了某个共同的特性。</li><li>它允许你编写更为通用和灵活的代码。</li></ul><p><strong>局限性</strong>：</p><ul><li>由于动态分发的开销，特性对象可能比静态分发（如泛型）稍微慢一些。</li><li>特性对象不支持泛型特性（例如，<code>Trait&lt;T&gt;</code>）。</li><li>特性必须是对象安全的，才能被用作特性对象。这意味着特性中的方法不能有任何与特定类型相关的参数或返回值。</li></ul><p>尽管特性对象有其局限性，但在许多情况下，它们都是处理运行时多态性的理想选择。</p><p><strong>静态分发</strong></p><p>在Rust中，静态分发是指编译器在编译时为每种数据类型生成特定的函数或方法版本，从而避免了运行时的多态分发开销。这种方法使Rust能够为泛型代码提供与为具体类型手动编写的代码相同的性能。</p><p>静态分发的关键在于它是在编译时确定的，而不是在运行时。这意味着对于使用泛型参数的每个具体类型，都会生成一个特定的函数或方法版本。因此，使用静态分发的代码通常比使用动态分发的代码（如虚函数调用）更快，因为后者需要额外的运行时查找来确定要调用的正确函数或方法版本。</p><p>例如，考虑以下泛型函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn add&lt;T: Add&lt;Output=T&gt;&gt;(a: T, b: T) -&gt; T {</span></span>
<span class="line"><span>    a + b</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>当你用不同的类型调用这个函数时：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let int_sum = add(5, 7);   // 这里，T 是 i32</span></span>
<span class="line"><span>let float_sum = add(5.0, 7.0);  // 这里，T 是 f64</span></span></code></pre></div><p>Rust会为每种类型（如i32和f64）生成一个具体的<code>add</code>函数版本。</p><p>要注意的是，Rust的静态分发并不是通过模板实例化（如C++）来实现的，而是通过其强大的类型系统和特性来实现的。</p><p>Rust也支持动态分发，主要是通过特性对象来实现，但默认情况下，Rust倾向于使用静态分发，因为它通常提供更好的性能。</p><p><strong>动态分发</strong></p><p>动态分发是一种在运行时确定应该调用哪个方法或函数版本的机制。与静态分发相反，其中编译器在编译时为每种类型生成特定的函数或方法版本，动态分发在运行时，根据对象的实际类型，决定调用哪个方法。</p><p>在Rust中，动态分发主要通过特性对象来实现。当你使用一个特性作为一个对象类型时，Rust使用动态分发来调用该特性的方法。</p><p>例如，考虑以下特性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>trait Speak {</span></span>
<span class="line"><span>    fn speak(&amp;self);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在，我们有两个结构体实现这个特性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>struct Human;</span></span>
<span class="line"><span>struct Dog;</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>impl Speak for Human {</span></span>
<span class="line"><span>    fn speak(&amp;self) {</span></span>
<span class="line"><span>        println!(&quot;Hello!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>impl Speak for Dog {</span></span>
<span class="line"><span>    fn speak(&amp;self) {</span></span>
<span class="line"><span>        println!(&quot;Woof!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们可以创建一个包含特性对象的<code>Vec&lt;Box&lt;dyn Speak&gt;&gt;</code>，并在其中存储<code>Human</code>和<code>Dog</code>的实例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let mut speakers: Vec&lt;Box&lt;dyn Speak&gt;&gt; = Vec::new();</span></span>
<span class="line"><span>    speakers.push(Box::new(Human));</span></span>
<span class="line"><span>    speakers.push(Box::new(Dog));</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    for s in speakers {</span></span>
<span class="line"><span>        s.speak();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在上述代码中，<code>speak</code>方法的调用是动态分发的。当我们迭代<code>speakers</code>向量并调用<code>speak</code>方法时，Rust在运行时查找应该调用的正确方法版本。</p><p>动态分发的主要缺点是性能。由于需要在运行时查找正确的方法，动态分发通常比静态分发慢。但是，动态分发在某些情况下非常有用，例如当你需要存储不同类型的对象，但要统一处理它们时。</p><p>动态分发和静态分发的联系和区别</p><p><strong>联系：</strong></p><ol><li><strong>目的</strong>：无论是动态分发还是静态分发，它们的主要目的都是调用适当的方法或函数版本，尤其是在使用泛型或多态时。</li><li><strong>使用场景</strong>：在面向对象编程中，当有多个对象或类型可以响应同一方法或函数调用时，通常需要这两种分发机制之一。</li></ol><p><strong>区别：</strong></p><ol><li><strong>决策时间</strong>： <ul><li><strong>静态分发</strong>：在编译时确定应该调用哪个方法或函数版本。编译器为每种类型生成特定的函数或方法版本。</li><li><strong>动态分发</strong>：在运行时确定。需要额外的运行时机制（如虚拟表）来查找并调用适当的方法版本。</li></ul></li><li><strong>性能</strong>： <ul><li><strong>静态分发</strong>：通常更快，因为编译器在编译时已经知道应该调用哪个方法版本，所以没有运行时查找的开销。</li><li><strong>动态分发</strong>：可能会稍慢，因为需要运行时查找适当的方法版本。但是，对于某些应用程序，这种开销可能是可以接受的。</li></ul></li><li><strong>实现方式</strong>： <ul><li><strong>静态分发</strong>：在Rust中，通过泛型和参数多态性实现。</li><li><strong>动态分发</strong>：在Rust中，通过特性对象（如<code>Box&lt;dyn Trait&gt;</code>）实现。</li></ul></li><li><strong>灵活性</strong>： <ul><li><strong>静态分发</strong>：由于在编译时确定，所以更严格，可能不如动态分发灵活。</li><li><strong>动态分发</strong>：提供更高的灵活性，允许在运行时根据对象的实际类型来决定调用哪个方法版本。</li></ul></li><li><strong>使用情境</strong>： <ul><li><strong>静态分发</strong>：当你知道在编译时所有可能的类型并希望获得最佳性能时。</li><li><strong>动态分发</strong>：当你希望在运行时处理不同的类型，并可能在未来添加更多类型时。</li></ul></li></ol><h4 id="下面是我与chatgpt之间对话" tabindex="-1">下面是我与chatgpt之间对话： <a class="header-anchor" href="#下面是我与chatgpt之间对话" aria-label="Permalink to &quot;下面是我与chatgpt之间对话：&quot;">​</a></h4><p><strong>我</strong>：泛型和特型有具体的例子，我不能很好的理清楚它们之间的关系</p><p><strong>chat</strong>：当然可以。让我们通过一个简单的例子来解释泛型和特性的区别和它们如何一起工作。</p><ul><li><p><strong>泛型</strong></p><p>假设你想为两个数字类型（如 i32 和 f64）编写一个函数，该函数返回这两个数字的和。不使用泛型，你可能需要为每种类型写一个函数：</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn add_i32(a: i32, b: i32) -&gt; i32 {</span></span>
<span class="line"><span>    a + b</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>fn add_f64(a: f64, b: f64) -&gt; f64 {</span></span>
<span class="line"><span>    a + b</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>但这样做很繁琐。使用泛型，你可以这样写：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn add&lt;T&gt;(a: T, b: T) -&gt; T {</span></span>
<span class="line"><span>    a + b</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>但是，上面的代码会出错，因为 Rust 不知道 T 是否支持 + 操作。这就是特性发挥作用的地方！</p><ul><li><p><strong>特性</strong></p><p>你可以定义一个特性，该特性声明了支持加法的类型必须实现的方法：</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>trait Addable {</span></span>
<span class="line"><span>    fn add(self, other: Self) -&gt; Self;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后，为 i32 和 f64 实现这个特性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>impl Addable for i32 {</span></span>
<span class="line"><span>    fn add(self, other: i32) -&gt; i32 {</span></span>
<span class="line"><span>        self + other</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>impl Addable for f64 {</span></span>
<span class="line"><span>    fn add(self, other: f64) -&gt; f64 {</span></span>
<span class="line"><span>        self + other</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在，你可以更新你的泛型函数，使其只接受实现了 Addable 特性的类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn add&lt;T: Addable&gt;(a: T, b: T) -&gt; T {</span></span>
<span class="line"><span>    a.add(b)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在，你可以使用同一个函数 add 来加 i32 或 f64！</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let sum_i32 = add(5, 7);        // i32</span></span>
<span class="line"><span>let sum_f64 = add(5.0, 7.5);    // f64</span></span></code></pre></div><p>通过这个例子，你可以看到泛型允许你编写可以适应多种类型的代码，而特性允许你为这些类型定义行为。当它们一起使用时，你可以编写既灵活又类型安全的代码。</p><p>**我：**静态分发还是使用的不同的类型啊，比如i32和f64之类的，为什么说只有动态分发是不同类型的</p><p>**chatgpt：**这是一个很好的问题，让我们深入探讨静态分发和动态分发之间的区别。</p><ol><li><p><strong>静态分发（如使用泛型）</strong>：</p><p>当我们在Rust中使用泛型函数，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fn foo&lt;T&gt;(item: T) { /* ... */ }</span></span></code></pre></div><p>并且我们分别用<code>i32</code>和<code>f64</code>类型调用它，编译器会为这两个具体类型生成两个不同的函数实例。这意味着在编译时，函数的具体版本是已知的。因此，虽然泛型看起来像是一个函数，但实际上，对于每种类型，都有一个专门的、完全展开的版本。这就是所谓的&quot;monomorphization&quot;，它是一种静态分发机制。</p></li><li><p><strong>动态分发（使用特性对象）</strong>：</p><p>当我们使用特性对象，例如<code>Box&lt;dyn SomeTrait&gt;</code>，我们实际上说的是，我们有一个指向某种实现了<code>SomeTrait</code>的类型的指针，但我们不知道具体是什么类型。所以，当我们调用一个特性方法，Rust必须在运行时查找正确的方法来调用。这是通过所谓的虚拟调度表（vtable）完成的。</p><p>而关键点是，对于特性对象，我们并不知道具体的类型。我们只知道它实现了某个特性。而这个特性可以被多种类型实现。</p></li></ol><p>所以，当我们说&quot;动态分发涉及不同的类型&quot;时，我们的意思是，使用特性对象，我们不需要知道具体的类型，我们只需要知道它满足某个特性。而在静态分发中，虽然我们也可以处理多种类型（如泛型），但每个类型都有其自己在编译时确定的函数版本。</p><p>总之，静态分发确实涉及不同的类型，但这些类型在编译时都是已知的。而动态分发允许我们在运行时处理不同的类型，这些类型实现了共同的特性，但具体的类型在编译时是未知的。</p><p>\\</p>`,170)]))}const h=a(l,[["render",i]]);export{u as __pageData,h as default};
