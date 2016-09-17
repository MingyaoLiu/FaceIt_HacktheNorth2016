var translation = {
	"en" : {
		lang : "English",
		helloText : "Hello!",
		cmtitle : "Cipher X - Anniversary Edition",
		menu : "Menu",
		translate : "Translate",
		homePage : "Home Page",
		FBtoCB : "Copy from FB to CB",
		charFreq : "Character Frequency",
		character : "Character",
		letter : "Letter",
		count : "Count",
		percent : "Percentage",
		clearCB : "Clear CodeBlock",
		uppercase : "Uppercase Letter",
		lowercase : "Lowercase Letter",
		addSpace : "Add Space",
		betweenAddSpace : "Between how many characters",
		cancel : "Cancel",
		confirm : "Confirm",
		illiminateSpace : "Illiminate Space",
		spaceToParagraph : "Space to Paragraph",
		reverseParagraph : "Reverse Every Paragraph",
		reverseWhole : "Reverse Whole Article",
		close : "Close",
		delete : "Delete",
		copyCB : "Copy CB",
		historyList : "Clode Block History",
		lastHistory : "Last History",
		endOfHistory : "End Of History",
		codeblockplaceholder : "Cipher Box",
		noResult : "No Result Found",
		from : "From",
		to : "To",
		displayAll : "Display All",
		convertTo : "Convert : ",
		pc : "PC",
		cell : "Cellphone",
		shift : "Shift to :",
		toLeft : "Left",
		toRight : "Right",
		offset : "Offset",

		encrypt : "Encrypt",
		decrypt : "Decrypt",
		clearText : "Clear",
		copyText : "Copy",
		undoText : "Undo",
		redoText : "Redo",
		//welcome Page
		themeselecttitle : "Theme Choice",
		themeselecttext : "<p>Select the color to your heart, and save it in the app.</p>",
		pink : "Pink",
		indigo : "Indigo",
		purple : "Purple",
		xixbannertext : "<p>The home of the Code Machine.<br/>Cipher is the language of emotion, and feeling of heart.</p>",
		goToXIX : "Go To Site",
		goBigTitle : "Got Big?",
		goBigText : "<p>Switch layout between Fold(Mobile) and Flat(Desktop) design.<br/>We got you covered.</p>",
		foldStyle : "Fold",
		flatStyle : "Flat",
		privacyPolicyTitle : "Privacy policy",
		privacyPolicyText : "<p>We protect everyone from information leak. Check out our privacy policy in the link.</p>",
		link : "Link",

		//Sim Tra Conversion
		simToTra : "Simplified to Traditional",
		simTra : "Simplified-Traditional Conversion",
		traToSim : "Traditional to Simplified",
		// Pin Yin
		pinYin : "PinYin Conversion",
		haveAccent : "Have Accent",
		noAccent : "No Accent",
		// Si Jiao
		siJiao : "Si Jiao Conversion",
		// Zhu Yin
		zhuYin : "Zhu Yin Conversion",
		charToZhuYin : "CHS to ZhuYin Letter",
		zhuYinToChar : "ZhuYin Letter to CHS",
		// Wubi
		wuBi : "Wu Bi Conversion",
		chsToEng : "CHS to ENG Letter",
		engToChs : "ENG to CHS Letter",

		// Simple Alphabet
		numToAlpha : "Number to Letter",
		alphaToNum : "Letter to Number",
		mode : "Mode :",
		mode1_26 : "1 - 26",
		mode01_26 : "01 - 26",
		//Bacon
		bacon : "Bacon Cipher",
		charToBacon : "Letter to Bacon",
		baconToChar : "Bacon to Letter",
		mode_normal : "Normal",
		mode_i_j_u_v : "i-j u-v",
		// Base Radix
		baseRadix : "Base/Radix Conversion",
		// Morse
		morse : "Morse Code Cipher",
		dit : "dits ",
		dah : "dahs ",
		spacing : "Spacing ",
		charToMorse : "Letter to Morse",
		morseToChar : "Morse to Lettter",
		// Atbash 
		atbash : "Atbash Conversion",
		// Caesar
		caesar : "Caesar Cipher",
		// DVORAK
		dvorak : "DVORAK Conversion",
		qweToDvo : "QWE to DVO",
		dvoToQwe : "DVO to QWE",
		// NumPad Shape
		numPadShape : "NumPad-Shape Convertion",
		// NumPad Substitution
		numPadSub : "NumPad Substitution",
		// QWERT Coordinate
		qwertCood : "QWERT Coordinate Conversion",
		alphaToCood : "Letter to Coordinate",
		coodToAlpha : "Coordinate to Letter",
		// QWERT Substitution
		qwertSub : "QWERT Substitution",
		onlyAlpha : "Only Letters",
		sameRow : "Same Row",
		qweToBNM : "QWE --- BNM",
		// Simple Alphabet Substitution
		simAlpha : "Simple Alphabet Substitution",
		// ROT 13
		rot13 : "ROT13 Conversion",
		// Vigenere
		key : "Secret Key",
		vigenere : "Vigenère Cipher",
		// Rail Fence
		railFence : "Rail Fence Cipher",
		zigzag : "Zigzag",
		straight : "Straight",
		length : "length",
		// Pigpen
		pigpen : "Pigpen Cipher",
		// random
		random : "Random Substitution",
		remainLetter : "Remaining Letters : ",
		menuCipherItems : [
		{
			name : "CHS Cipher",
			subMenuCipherItems : [
			{
				name : "Sim Tra CHS Convert",
				link : "simtra",
				param : {
					simtra_order : true
				}
			},
			{
				name : "PinYin",
				link : "pinyin",
				param : {
					pinyin_accent : false
				}
			},
			{
				name : "SiJiao",
				link : "sijiao",
				param : {
					sijiao_order : true
				}
			},
			{
				name : "WuBi",
				link : "wubi",
				param : {
					wubi_order : true
				}
			},
			{
				name : "ZhuYin",
				link : "zhuyin",
				param : {
					zhuyin_order : true
				}
			}
			]
		},
		
		{
			name : "Subs-Replace Cipher",
			subMenuCipherItems : [
			{
				// This used to be in the keyboard section i intent to move it here
				name : "Simple Alphabet",
				link : "simAlpha",
				param : {
					simAlpha_order : false,
					simAlpha_mode : "mode12"
				}
			},
			{
				name : "Caesar",
				link : "caesar",
				param : {
					caesar_direct : true,
					caesar_all : false
				}
			},
			{
				name : "ROT13",
				link : "rot13",
				param : {
					rot13_direct : true
				}
			},
			{
				name : "Rail Fence",
				link : "railFence",
				param : {
					railFence_order : true,	//decrypt
					railFence_mode : true,	//straight
					railFence_all : false
				}
			},
			{
				name : "Atbash",
				link : "atbash"

			},
			{
				name : "Bacon",
				link : "bacon",
				param : {
					bacon_order : true,
					bacon_mode : "normal"
				}


			},
			{
				name : "Pigpen",
				link : "pigpen"
			},
			{
				name : "Morse Code",
				link : "morse",
				param : {
					morse_convert : true,
					morse_all : false
				}
			},
			{
				name : "Affine",
				link : "",
				param : {
					affine_mode : true,
					affine_prime : false,
					affine_shift : 1
				}
			},
			{
				name : "Random",
				link : "random"
			}
			]
		},
		{
			name : "Multi-Form/Matrix Cipher",
			subMenuCipherItems : [
			{
				name : "Vigenere",
				link : "vigenere",
				param : {
					vgn_order : true
					// vgn_direct : true
				}
			},
			{
				name : "Polybius",
				link : ""
			},
			{
				name : "Playfair",
				link : ""
			},
			{
				name : "Bifid",
				link : ""
			},
			{
				name : "Trifid",
				link : ""
			},
			{
				name : "ADFGVX",
				link : ""
			},
			{
				name : "Two-square",
				link : ""
			},
			{
				name : "Quad-square",
				link : ""
			},
			{
				name : "Hill",
				link : ""
			}
			]
		},
		{
			name : "Keyboard Cipher",
			subMenuCipherItems : [
			{
				name : "QWERT Subs",
				link : "qwertSub",
				param : {
					qwertSub_onlyAlphabet : true,
					qwertSub_type : true,
					qwertSub_direct : true,
					qwertSub_offset : 1,
					qwertSub_all : false
				}
			},
			{
				name : "QWERT Coods",
				link : "qwertCood",
				param : {
					qwertCood_direct : true
				}
			},
			{
				name : "NumPad Shape",
				link : "numPadShape",
				param : {
					numPadShape_type : "regular",
					numPadShape_direct : true
				}
			},
			{
				name : "NumPad Subs",
				link : "numPadSub",
				param : {
					numPadSub_type : "cellphone",
					numPadSub_direct : true
				}
			},
			{
				name : "DVORAK",
				link : "dvorak",
				param : {
					dvorak_direct : true
				}
			},
			{
				name : "JPN keyboard",
				link : ""
			},
			{
				name : "ZhuYin keyboard",
				link : ""
			}
			]
		},
		{
			name : "Modern Cipher",
			subMenuCipherItems : [
			{
				name : "Base/Radix Convert",
				link : "baseRadix"
			},
			{
				name : "MD5",
				link : ""
			},
			{
				name : "SHA1",
				link : ""
			},
			{
				name : "SHA256",
				link : ""
			},
			{
				name : "SHA512",
				link : ""
			},
			{
				name : "RIPEMD160",
				link : ""
			},
			{
				name : "RSA",
				link : ""
			},
			{
				name : "ECC",
				link : ""
			}
			]
		}
		]
	},
	"cn" : {
		lang : "中文",
		helloText : "你好!",
		cmtitle : "密码机器 － 周年版",
		menu : "目录",
		translate : "翻译",
		homePage : "主页",
		FBtoCB : "从FB复制到密文框",
		charFreq : "字母频率",
		character : "字符",
		letter : "字母",
		count : "数目",
		percent : "百分比",
		clearCB : "清空密文框",
		uppercase : "变大写",
		lowercase : "变小写",
		addSpace : "添加空格",
		betweenAddSpace : "隔多少字符",
		cancel : "取消",
		confirm : "确定",
		illiminateSpace : "消除空格",
		spaceToParagraph : "空格分行",
		reverseParagraph : "分行倒序",
		reverseWhole : "全文倒序",
		close : "关闭",
		delete : "删除",
		copyCB : "复制到密文框",
		historyList : "密文框历史",
		lastHistory : "最后",
		endOfHistory : "已经到历史纪录最前",
		codeblockplaceholder : "密文框CB (在这里输入你的密文)",
		noResult : "没有结果",
		from : "从",
		to : "到",
		displayAll : "显示所有",
		convertTo : "转换 : ",
		pc : "电脑",
		cell : "手机",
		shift : "位移到 :",
		toLeft : "向左",
		toRight : "向右",
		offset : "位移",

		encrypt : "加密",
		decrypt : "解密",
		clearText : "清空",
		copyText : "复制",
		undoText : "撤销",
		redoText : "重做",

		//welcome Page
		themeselecttitle : "选择主题",
		themeselecttext : "<p>选择你所钟爱的主题, 并保存在软件中。</p>",
		pink : "粉色",
		indigo : "靛蓝色",
		purple : "紫色",
		xixbannertext : "<p>密码机器的家<br/>密码是情感的表达, 是内心的追随。</p>",
		goToXIX : "网址",
		goBigTitle : "比格更比格?",
		goBigText : "<p>切换折叠（手机）和平铺（电脑）设计。<br/>大屏小屏兼得。</p>",
		foldStyle : "折叠",
		flatStyle : "平铺",
		privacyPolicyTitle : "隐私条例",
		privacyPolicyText : "<p>我们尽我们所能保护用户隐私不外泄。在链接中查看具体信息。</p>",
		link : "链接",

		//Sim Tra Conversion
		simToTra : "简体转繁体",
		simTra : "简体繁体转换",
		traToSim : "繁体转简体",
		// Pin Yin
		pinYin : "拼音转换",
		haveAccent : "带音节",
		noAccent : "去音节",
		// Si Jiao
		siJiao : "四角转换",
		// Zhu Yin
		zhuYin : "注音转换",
		charToZhuYin : "中文转注音符号",
		zhuYinToChar : "注音符号转中文",
		// Wubi
		wuBi : "五笔转换",
		chsToEng : "中文转五笔符号",
		engToChs : "五笔符号转中文",

		// Simple Alphabet
		numToAlpha : "数字转字符",
		alphaToNum : "字符转数字",
		mode : "模式 :",
		mode1_26 : "1 - 26",
		mode01_26 : "01 - 26",
		//Bacon
		bacon : "培根密码",
		charToBacon : "字符转培根",
		baconToChar : "培根转字符",
		mode_normal : "普通",
		mode_i_j_u_v : "i-j u-v",
		// Base Radix
		baseRadix : "进制转换",
		// Morse
		morse : "摩尔斯电码",
		dit : "嘀 ",
		dah : "嗒 ",
		spacing : "分隔 ",
		charToMorse : "字符转摩尔斯",
		morseToChar : "摩尔斯转字符",
		// Atbash 
		atbash : "阿特巴什密码",
		// Caesar
		caesar : "凯撒密码",
		// DVORAK
		dvorak : "DVORAK键盘转换",
		qweToDvo : "QWE 转 DVO",
		dvoToQwe : "DVO 转 QWE",
		// NumPad Shape
		numPadShape : "小键盘形状转换",
		// NumPad Substitution
		numPadSub : "小键盘数字替换",
		// QWERT Coordinate
		qwertCood : "QWERT坐标转换",
		alphaToCood : "字符转坐标",
		coodToAlpha : "C坐标转字符",
		// QWERT Substitution
		qwertSub : "QWERT替换",
		onlyAlpha : "只替换字母",
		sameRow : "同行循环",
		qweToBNM : "QWE --- BNM循环",
		// Simple Alphabet Substitution
		simAlpha : "简单数字字母替换",
		// ROT 13
		rot13 : "ROT13转换",
		// Vigenere
		key : "密钥",
		vigenere : "维吉尼亚密码",
		// Rail Fence
		railFence : "栅栏密码",
		zigzag : "篱笆式",
		straight : "直列式",
		length : "长度",
		// Pigpen
		pigpen : "猪圈密码",
		// random
		random : "随机替代",
		remainLetter : "剩余字符 : ",
		menuCipherItems : [
		{
			name : "中文密码",
			subMenuCipherItems : [
			{
				name : "简繁转换",
				link : "simtra",
				param : {
					simtra_order : true
				}
			},
			{
				name : "拼音",
				link : "pinyin",
				param : {
					pinyin_accent : false
				}
			},
			{
				name : "四角",
				link : "sijiao",
				param : {
					sijiao_order : true
				}
			},
			{
				name : "五笔",
				link : "wubi",
				param : {
					wubi_order : true
				}
			},
			{
				name : "注音",
				link : "zhuyin",
				param : {
					zhuyin_order : true
				}
			}
			]
		},
		
		{
			name : "替代转换密码",
			subMenuCipherItems : [
			{
				// This used to be in the keyboard section i intent to move it here
				name : "简单字母",
				link : "simAlpha",
				param : {
					simAlpha_order : false,
					simAlpha_mode : "mode12"
				}
			},
			{
				name : "凯撒",
				link : "caesar",
				param : {
					caesar_direct : true,
					caesar_all : false
				}
			},
			{
				name : "ROT13",
				link : "rot13",
				param : {
					rot13_direct : true
				}
			},
			{
				name : "栅栏",
				link : "railFence",
				param : {
					railFence_order : true,	//decrypt
					railFence_mode : true,	//straight
					railFence_all : false
				}
			},
			{
				name : "阿特巴什",
				link : "atbash"

			},
			{
				name : "培根",
				link : "bacon",
				param : {
					bacon_order : true,
					bacon_mode : "normal"
				}


			},
			{
				name : "猪圈",
				link : "pigpen"
			},
			{
				name : "摩尔斯",
				link : "morse",
				param : {
					morse_convert : true,
					morse_all : false
				}
			},
			{
				name : "Affine",
				link : "",
				param : {
					affine_mode : true,
					affine_prime : false,
					affine_shift : 1
				}
			},
			{
				name : "随机",
				link : "random"
			}
			]
		},
		{
			name : "多表/矩阵密码",
			subMenuCipherItems : [
			{
				name : "维吉尼亚",
				link : "vigenere",
				param : {
					vgn_order : true
					// vgn_direct : true
				}
			},
			{
				name : "polybius",
				link : ""
			},
			{
				name : "playfair",
				link : ""
			},
			{
				name : "Bifid",
				link : ""
			},
			{
				name : "Trifid",
				link : ""
			},
			{
				name : "ADFGVX",
				link : ""
			},
			{
				name : "Two-square",
				link : ""
			},
			{
				name : "Quad-square",
				link : ""
			},
			{
				name : "Hill",
				link : ""
			}
			]
		},
		{
			name : "键盘类密码",
			subMenuCipherItems : [
			{
				name : "QWERT替换",
				link : "qwertSub",
				param : {
					qwertSub_onlyAlphabet : true,
					qwertSub_type : true,
					qwertSub_direct : true,
					qwertSub_offset : 1,
					qwertSub_all : false
				}
			},
			{
				name : "QWERT坐标",
				link : "qwertCood",
				param : {
					qwertCood_direct : true
				}
			},
			{
				name : "小键盘形状",
				link : "numPadShape",
				param : {
					numPadShape_type : "regular",
					numPadShape_direct : true
				}
			},
			{
				name : "小键盘替换",
				link : "numPadSub",
				param : {
					numPadSub_type : "cellphone",
					numPadSub_direct : true
				}
			},
			{
				name : "DVORAK",
				link : "dvorak",
				param : {
					dvorak_direct : true
				}
			},
			{
				name : "日文键盘",
				link : ""
			},
			{
				name : "注音键盘",
				link : ""
			}
			]
		},
		{
			name : "现代密码",
			subMenuCipherItems : [
			{
				name : "进制转换",
				link : "baseRadix"
			},
			{
				name : "MD5",
				link : ""
			},
			{
				name : "SHA1",
				link : ""
			},
			{
				name : "SHA256",
				link : ""
			},
			{
				name : "SHA512",
				link : ""
			},
			{
				name : "RIPEMD160",
				link : ""
			},
			{
				name : "RSA",
				link : ""
			},
			{
				name : "ECC",
				link : ""
			}
			]
		}
		]
	}
}