"use strict";(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[919],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),h=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=h(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=h(t),d=o,m=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return t?a.createElement(m,r(r({ref:n},u),{},{components:t})):a.createElement(m,r({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var h=2;h<i;h++)r[h]=t[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8005:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return u},default:function(){return p}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),r=["components"],s={id:"common_functions",title:"5 - Common Functions in Chialisp"},l=void 0,h={unversionedId:"common_functions",id:"common_functions",isDocsHomePage:!1,title:"5 - Common Functions in Chialisp",description:"When you start to write full smart coins, you will start to realize that you will need certain common functionality in a lot of puzzles.",source:"@site/docs/common_functions.md",sourceDirName:".",slug:"/common_functions",permalink:"/docs/common_functions",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/common_functions.md",version:"current",frontMatter:{id:"common_functions",title:"5 - Common Functions in Chialisp"},sidebar:"someSidebar",previous:{title:"4 - The High Level Language, Compiler, and Functions",permalink:"/docs/high_level_lang"},next:{title:"6 - The Standard Transaction",permalink:"/docs/standard_transaction"}},u=[{value:"include",id:"include",children:[]},{value:"sha256tree1",id:"sha256tree1",children:[]},{value:"Currying",id:"currying",children:[]},{value:"Outer and Inner puzzles",id:"outer-and-inner-puzzles",children:[]}],c={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When you start to write full smart coins, you will start to realize that you will need certain common functionality in a lot of puzzles.\nLet's go over how to include them and what some of them are:"),(0,i.kt)("h2",{id:"include"},"include"),(0,i.kt)("p",null,"If you want to import some functionality that you use frequently without having to copy/paste it between files, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"include"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},";; condition_codes.clvm\n(\n  (defconstant AGG_SIG_ME 50)\n  (defconstant CREATE_COIN 51)\n)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},';;main.clvm\n(mod (pubkey msg puzzle_hash amount)\n\n  (include "condition_codes.clvm")\n\n  (list (list AGG_SIG_ME pubkey msg) (list CREATE_COIN puzzle_hash amount))\n\n)\n')),(0,i.kt)("p",null,"When running main.clvm with ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),", make sure to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-i")," option to specify in which directories to look for includable files.\nIf our condition_codes.clvm file was in the directory ",(0,i.kt)("inlineCode",{parentName:"p"},"./libraries/chialisp/")," then you would pass that to ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," so that it knows where to find it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"run -i ./libraries/chialisp/ main.clvm\n")),(0,i.kt)("p",null,"Also note that the include files are a special format. Everything that is defined goes into a single set of parentheses like in condition_codes.clvm above.\nYou can then use any of those constants/functions when writing your program, without having to import each one individually.\nThe compiler will only include things that you use, so don't worry about including a large library file when attempting to optimize the size of your program."),(0,i.kt)("h2",{id:"sha256tree1"},"sha256tree1"),(0,i.kt)("p",null,"When puzzles are hashed, they are not simply serialized and passed to sha256.\nInstead, we take the ",(0,i.kt)("em",{parentName:"p"},"tree hash")," of the puzzle."),(0,i.kt)("p",null,"Recall that every clvm program can be represented as a binary tree.\nEvery object is either an atom (a leaf of the tree) or a cons box (a branch of the tree).\nWhen we hash the puzzle we start at the leaves of the tree and hash our way up, concatenating either a 1 or a 2 to denote that it's either an atom or a cons box.\nOnce a cons box is hashed, it becomes a new leaf to be hashed into its parent cons box and the process recurses.\nHere's what that looks like in Chialisp:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(defun sha256tree1\n   (TREE)\n   (if (l TREE)\n       (sha256 2 (sha256tree1 (f TREE)) (sha256tree1 (r TREE)))\n       (sha256 1 TREE)\n   )\n)\n")),(0,i.kt)("p",null,"It is extremely useful to calculate tree hashes within a Chialisp puzzle.\nYou can assert puzzles of other coins, condense puzzles for easier signing, and make CREATE_COIN conditions that are dependent on some passed in data."),(0,i.kt)("h2",{id:"currying"},"Currying"),(0,i.kt)("p",null,"Currying is an extremely important concept in Chialisp that is responsible for almost the entirety of how state is stored in coins.\nThe idea is to pass in arguments to a puzzle ",(0,i.kt)("em",{parentName:"p"},"before")," it is hashed.\nWhen you curry, you commit to solution values so that the individual solving the puzzle cannot change them.\nLet's take a look at how this is implemented in Chialisp:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},";; utility function used by curry\n(defun fix_curry_args (items core)\n (if items\n     (qq (c (q . (unquote (f items))) (unquote (fix_curry_args (r items) core))))\n     core\n )\n)\n\n; (curry sum (list 50 60)) => returns a function that is like (sum 50 60 ...)\n(defun curry (func list_of_args) (qq (a (q . (unquote func)) (unquote (fix_curry_args list_of_args (q . 1))))))\n")),(0,i.kt)("p",null,"The reason this is so useful is because you may want to create the blueprint of a puzzle, but use different values for certain parameters every time you create it.\nYou can't rely on the puzzle solver to honestly and correctly pass in the information you want to use, so you need to make sure it is passed in before they ever get the chance to solve it."),(0,i.kt)("p",null,"The above function may look complex, but all it's really doing is wrapping the function in an ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and prepending the arguments to ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," which (when compiled to clvm) will refer the rest of the puzzle arguments.\nAbsent of all the quotes, the above code reduces to something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(a func (c curry_arg_1 (c curry_arg_2 1)))\n")),(0,i.kt)("p",null,"You can also do the reverse operation.\nGiven a program, you can ",(0,i.kt)("em",{parentName:"p"},"uncurry")," the list of arguments, with a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"(f (r (r )))"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(f (r (r curried_func)))\n; (c curry_arg_1 (c curry_arg_2 1))\n")),(0,i.kt)("p",null,"Let's take our password locked coin example from earlier, this time as a Chialisp puzzle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(mod (password new_puzhash amount)\n  (defconstant CREATE_COIN 51)\n\n  (defun check_password (password new_puzhash amount)\n\n    (if (= (sha256 password) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824))\n      (list (list CREATE_COIN new_puzhash amount))\n      (x)\n    )\n  )\n\n  ; main\n  (check_password password new_puzhash amount)\n)\n")),(0,i.kt)("p",null,"You can see that the password hash is baked into the source of the puzzle.\nThis means every time that you want to lock up a coin with a new password, you have to recreate the file that contains the source of the code.\nIt would be much nicer if we fully generalized it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(mod (PASSWORD_HASH password new_puzhash amount)\n  (defconstant CREATE_COIN 51)\n\n  (defun check_password (PASSWORD_HASH password new_puzhash amount)\n\n    (if (= (sha256 password) PASSWORD_HASH)\n      (list (list CREATE_COIN new_puzhash amount))\n      (x)\n    )\n  )\n\n  ; main\n  (check_password PASSWORD_HASH password new_puzhash amount)\n)\n")),(0,i.kt)("p",null,"However, now we have the problem that anyone can pass in whatever password/hash combo that they please and unlock this coin.\nWhen we create this coin we need the password hash to be committed to. Before determining the puzzle hash of the coin we're going to create, we need to curry in the hash with something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'; curry_password_coin.clvm\n(mod (password_hash password_coin_mod)\n  (include "curry.clvm") ; From above\n\n  (curry password_coin_mod (list password_hash))\n)\n')),(0,i.kt)("p",null,"If we compile this function and pass it parameters like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brun <curry password coin mod> '((q . 0xcafef00d) (q . <password coin mod>))'\n")),(0,i.kt)("p",null,"we will receive a puzzle that looks very similar to our password coin module, but has been expanded to include the hash we passed in.\nYou can now run the currying mod above with a different password hash and it will output a new puzzle every time.\nWe can then hash that puzzle and create a coin with the returned puzzle hash."),(0,i.kt)("p",null,"Note that this required that we run the currying module using ",(0,i.kt)("inlineCode",{parentName:"p"},"brun")," in our own environment off chain in order to create the puzzle we would lock up our coin with.\nA lot of the time this currying will happen in python or whatever wrapper language is being used by the software creating the coins.\nHowever, there are some use cases in which we would want to use currying within the scope of a puzzle.\nLet's look at one now."),(0,i.kt)("h2",{id:"outer-and-inner-puzzles"},"Outer and Inner puzzles"),(0,i.kt)("p",null,'A common design pattern, and one of the most powerful features of Chialisp, is the ability to have an outer puzzle that "wraps" an inner puzzle.\nThis concept is extremely handy because it allows a coin to retain all of it\'s standard functionality and programmability within the inner puzzle, but be bound to an extra set of rules by the outer puzzle.'),(0,i.kt)("p",null,"For this example, we're going to continue with our password locking, but this time we're going to require that every time the coin is spent, it requires a new password to be set.\nLet's look at all the code and then we'll break it down:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'(mod (\n    MOD_HASH        ;; curried in\n    PASSWORD_HASH   ;; curried in\n    INNER_PUZZLE    ;; curried in\n    inner_solution\n    password\n    new_password_hash\n  )\n\n  (include "condition_codes.clvm")\n  (include "sha256tree1.clvm")\n  (include "curry-and-treehash.clvm")\n\n  (defun pw-puzzle-hash (MOD_HASH mod_hash_hash new_password_hash_hash inner_puzzle_hash)\n     (puzzle-hash-of-curried-function\n       MOD_HASH\n       inner_puzzle_hash new_password_hash_hash mod_hash_hash ; parameters must be passed in reverse order\n     )\n   )\n\n  ;; tweak `CREATE_COIN` condition by wrapping the puzzle hash, forcing it to be a password locked coin\n  (defun-inline morph-condition (condition new_password_hash MOD_HASH)\n   (if (= (f condition) CREATE_COIN)\n     (list CREATE_COIN\n       (pw-puzzle-hash MOD_HASH (sha256tree1 MOD_HASH) (sha256tree1 new_password_hash) (f (r condition)))\n       (f (r (r condition)))\n     )\n     condition\n   )\n  )\n\n  ;; tweak all `CREATE_COIN` conditions, enforcing created coins to be locked by passwords\n  (defun morph-conditions (conditions new_password_hash MOD_HASH)\n   (if conditions\n     (c\n       (morph-condition (f conditions) new_password_hash MOD_HASH)\n       (morph-conditions (r conditions) new_password_hash MOD_HASH)\n     )\n     ()\n   )\n  )\n\n  ; main\n  (if (= (sha256 password) PASSWORD_HASH)\n    (morph-conditions (a INNER_PUZZLE inner_solution) new_password_hash MOD_HASH)\n    (x "wrong password")\n  )\n\n)\n')),(0,i.kt)("p",null,"You may notice that we imported a new library called ",(0,i.kt)("inlineCode",{parentName:"p"},"curry-and-treehash"),".\nWe'll talk about that in a few steps."),(0,i.kt)("p",null,"First, let's talk about the arguments.\nWhen you create this puzzle for the first time you need to curry in 3 things: ",(0,i.kt)("inlineCode",{parentName:"p"},"MOD_HASH")," which is the tree hash of this code with no curried arguments, ",(0,i.kt)("inlineCode",{parentName:"p"},"PASSWORD_HASH")," which is the hash of the password that will unlock this coin, and ",(0,i.kt)("inlineCode",{parentName:"p"},"INNER_PUZZLE")," which is a completely separate puzzle that will have its own rules about how the coin can be spent."),(0,i.kt)("p",null,"Chialisp puzzles have the tendency to be read from the bottom up, so lets start with this chunk:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'; main\n(if (= (sha256 password) PASSWORD_HASH)\n  (morph-conditions (a INNER_PUZZLE inner_solution) new_password_hash MOD_HASH)\n  (x "wrong password")\n)\n')),(0,i.kt)("p",null,"All that's happening here is that we're making sure the password is correct and, if it is, we're going to run the curried in ",(0,i.kt)("inlineCode",{parentName:"p"},"INNER_PUZZLE")," with the passed in ",(0,i.kt)("inlineCode",{parentName:"p"},"inner_solution"),".\nThis will return a list of conditions that we will pass to the next function along with the new password hash and ",(0,i.kt)("inlineCode",{parentName:"p"},"MOD_HASH"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},";; tweak all `CREATE_COIN` conditions, enforcing created coins to be locked by passwords\n(defun morph-conditions (conditions new_password_hash MOD_HASH)\n (if conditions\n   (c\n     (morph-condition (f conditions) new_password_hash MOD_HASH)\n     (morph-conditions (r conditions) new_password_hash MOD_HASH)\n   )\n   ()\n )\n)\n")),(0,i.kt)("p",null,"Recursion is the foundation of Chialisp and functions like these very commonly show up when writing it.\nIn order to iterate through the list of conditions, we first check if there are still items left (remember that an empty list ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," or ",(0,i.kt)("strong",{parentName:"p"},"nil")," evaluates to false). Then, we morph the first condition and concatenate it with the recursive output of the rest of the list.\nIn the end, we will have the same list of items in the same order, but all of them will have passed thru ",(0,i.kt)("inlineCode",{parentName:"p"},"morph-condition"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},";; tweak `CREATE_COIN` condition by wrapping the puzzle hash, forcing it to be a password locked coin\n(defun-inline morph-condition (condition new_password_hash MOD_HASH)\n (if (= (f condition) CREATE_COIN)\n   (list CREATE_COIN\n     (pw-puzzle-hash MOD_HASH (sha256tree1 MOD_HASH) (sha256tree1 new_password_hash) (f (r condition)))\n     (f (r (r condition)))\n   )\n   condition\n )\n)\n")),(0,i.kt)("p",null,"This function is also pretty simple. We're first checking if the opcode (first item in the list) is CREATE_COIN.\nIf it's not, just return the condition as usual.\nIf it is, return a condition that is almost exactly the same, except we're passing the puzzle hash into a function that will modify it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(defun pw-puzzle-hash (MOD_HASH mod_hash_hash new_password_hash_hash inner_puzzle_hasr\n   (puzzle-hash-of-curried-function\n     MOD_HASH\n     inner_puzzle_hash new_password_hash_hash mod_hash_hash ; parameters must be passed in reverse order\n   )\n)\n")),(0,i.kt)("p",null,"This is where the exciting stuff happens.\nSince we don't know the inner puzzle, only it's hash, it's impossible to curry it directly into the next puzzle we want to create.\nFurthermore, if we don't want to pass in the whole source of this current module every time that we spend it, we don't have a puzzle to curry things into either."),(0,i.kt)("p",null,"However, all we care about is generating the correct ",(0,i.kt)("em",{parentName:"p"},"puzzle hash")," for the next puzzle, and we do have the tree hashes for both this module and the inner puzzle.\nWe can use ",(0,i.kt)("inlineCode",{parentName:"p"},"puzzle-hash-of-curried-function")," which allows us to create the puzzle hash of a function given: a) the puzzle hash of that function and b) the puzzle hashes of all of its arguments in reverse order ",(0,i.kt)("em",{parentName:"p"},"as though they were a part of a tree hash"),".  This means that arguments that are atoms and numbers are expected to be in tree hash form, with a 1 prefix like ",(0,i.kt)("inlineCode",{parentName:"p"},"(sha256 (q . 1) my-argument-value)")," and the output of ",(0,i.kt)("inlineCode",{parentName:"p"},"sha256tree")," is suitable for anything involving cons cells.  It would be possible for ",(0,i.kt)("inlineCode",{parentName:"p"},"puzzle-hash-of-curried-function")," to guess these if it took the parameter values themselves but that might require recomputation of expensive hashes."),(0,i.kt)("p",null,"Other implementation details of this library are a bit much to go into in this part of the tutorial but, in essence, it allows us to ",(0,i.kt)("em",{parentName:"p"},"resume")," a tree hash that we have completed except for the last step."),(0,i.kt)("p",null,'And that\'s it!  When this coin is created, it can only be spent by a password that hashes to the curried in PASSWORD_HASH.\nThe inner puzzle can be anything that you want including other outer puzzles that have their own inner puzzles.\nWhatever coins get created as a result of that inner puzzle will be "wrapped" by this same outer puzzle ensuring that every child of this coin is locked by a password ',(0,i.kt)("em",{parentName:"p"},"forever"),"."),(0,i.kt)("p",null,"We created a simple coin, but you can see the potential of this. You can enforce a set of rules not only on a coin that you lock up, but on ",(0,i.kt)("em",{parentName:"p"},"every")," descendant coin.\nNot only that, the rules can be enforced ",(0,i.kt)("em",{parentName:"p"},"on top of other smart coins"),".\nIn the Chialisp ecosystem, all smart coins are interoperable with each other unless otherwise specified by one of the puzzles in the stack. The possibilities are endless and represent the vast programmability that Chialisp enables for coins."),(0,i.kt)("p",null,"In the next section, we'll talk about the standard transaction format on the Chia network."))}p.isMDXComponent=!0}}]);