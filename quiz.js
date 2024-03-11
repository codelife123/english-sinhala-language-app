var currentQuestionIndex = 0;
var wordListLength =0
var correctAnswerCount=0

$(document).ready(function (){
	
	const originalArray = [{"en":"ability","si":"හැකියාව"},{"en":"able","si":"පුළුවන්"},{"en":"about","si":"ගැන"},{"en":"above","si":"ඉහත"},{"en":"accept","si":"පිළිගන්නවා"},{"en":"according","si":"අනුව"},{"en":"account","si":"ගිණුම"},{"en":"across","si":"හරහා"},{"en":"act","si":"පනත"},{"en":"action","si":"කටයුතු"},{"en":"activity","si":"ක්රියාකාරිත්වය"},{"en":"actually","si":"ඇත්තටම"},{"en":"add","si":"එකතු කරන්න"},{"en":"address","si":"ලිපිනය"},{"en":"administration","si":"පරිපාලනය"},{"en":"admit","si":"පිළිගන්නවා"},{"en":"adult","si":"වැඩිහිටි"},{"en":"affect","si":"බලපාන"},{"en":"after","si":"අනතුරුව"},{"en":"again","si":"නැවතත්"},{"en":"against","si":"එරෙහි"},{"en":"age","si":"වයස"},{"en":"agency","si":"නියෝජිතායතනය"},{"en":"agent","si":"නියෝජිතයා"},{"en":"ago","si":"පෙර"},{"en":"agree","si":"එකඟයි"},{"en":"agreement","si":"ගිවිසුම"},{"en":"ahead","si":"ඉදිරියෙන්"},{"en":"air","si":"ගුවන්"},{"en":"all","si":"සෑම"},{"en":"allow","si":"ඉඩ දෙන්න"},{"en":"almost","si":"පාහේ"},{"en":"alone","si":"තනියම"},{"en":"along","si":"දිගේ"},{"en":"already","si":"දැනටමත්"},{"en":"also","si":"තවද"},{"en":"although","si":"කෙසේ වෙතත්"},{"en":"always","si":"සැමවිටම"},{"en":"American","si":"ඇමෙරිකානු"},{"en":"among","si":"අතර"},{"en":"amount","si":"ප්රමාණය"},{"en":"analysis","si":"විශ්ලේෂණය"},{"en":"and","si":"සහ"},{"en":"animal","si":"සත්ව"},{"en":"another","si":"තවත්"},{"en":"answer","si":"පිළිතුර"},{"en":"any","si":"ඕනෑම"},{"en":"anyone","si":"ඕනෑම කෙනෙක්"},{"en":"anything","si":"කිසිවක්"},{"en":"appear","si":"පෙනී යයි"},{"en":"apply","si":"අයදුම් කරන්න"},{"en":"approach","si":"ප්රවේශය"},{"en":"area","si":"ප්රදේශය"},{"en":"argue","si":"වාද කරනවා"},{"en":"arm","si":"හස්තය"},{"en":"around","si":"අවට"},{"en":"arrive","si":"පැමිණේ"},{"en":"art","si":"කලාව"},{"en":"article","si":"ලිපිය"},{"en":"artist","si":"කලාකරු"},{"en":"as","si":"පරිදි"},{"en":"ask","si":"අහන්න"},{"en":"assume","si":"උපකල්පනය කරයි"},{"en":"at","si":"හිදී"},{"en":"attack","si":"පහර දෙනවා"},{"en":"attention","si":"අවධානය"},{"en":"attorney","si":"නීතිඥ"},{"en":"audience","si":"ප්රේක්ෂක"},{"en":"author","si":"කර්තෘ"},{"en":"authority","si":"අධිකාරිය"},{"en":"available","si":"ඇත"},{"en":"avoid","si":"වළකින්න"},{"en":"away","si":"දුරින්"},{"en":"baby","si":"ළදරු"},{"en":"back","si":"ආපසු"},{"en":"bad","si":"නරක"},{"en":"bag","si":"බෑගය"},{"en":"ball","si":"පන්දුව"},{"en":"bank","si":"බැංකුව"},{"en":"bar","si":"බාර්"},{"en":"base","si":"පදනම"},{"en":"be","si":"විය"},{"en":"beat","si":"පහර දෙනවා"},{"en":"beautiful","si":"ලස්සනයි"},{"en":"because","si":"නිසා"},{"en":"become","si":"බවට පත් වේ"},{"en":"bed","si":"ඇඳ"},{"en":"before","si":"කලින්"},{"en":"begin","si":"ආරම්භය"},{"en":"behavior","si":"හැසිරීම"},{"en":"behind","si":"පිටුපස"},{"en":"believe","si":"විශ්වාස කරනවා"},{"en":"benefit","si":"ප්රතිලාභය"},{"en":"best","si":"හොඳ"},{"en":"better","si":"වඩා හොඳ"},{"en":"between","si":"අතර"},{"en":"beyond","si":"ඔබ්බට"},{"en":"big","si":"මහා"},{"en":"bill","si":"බිල්පත"},
		{"en":"bit","si":"ටිකක්"},{"en":"black","si":"කලු"},{"en":"blood","si":"ලේ"},{"en":"blue","si":"නිල්"},{"en":"board","si":"මණ්ඩලය"},{"en":"body","si":"සිරුර"},{"en":"book","si":"පොත"},{"en":"born","si":"උපන්නා"},{"en":"both","si":"දෙකම"},{"en":"box","si":"පෙට්ටිය"},{"en":"boy","si":"කොල්ලා"},{"en":"break","si":"බිඳීම"},{"en":"bring","si":"ගේනවා"},{"en":"brother","si":"සහෝදරයා"},{"en":"budget","si":"අයවැය"},{"en":"build","si":"ගොඩනඟනවා"},{"en":"building","si":"ගොඩනැගිල්ල"},{"en":"business","si":"ව්යාපාරික"},{"en":"but","si":"එහෙත්"},{"en":"buy","si":"මිලදී ගන්න"},{"en":"by","si":"විසින්"},{"en":"call","si":"අමතන්න"},{"en":"camera","si":"කැමරා"},{"en":"campaign","si":"උද්ඝෝෂණය"},{"en":"can","si":"පුළුවන්"},{"en":"cancer","si":"පිළිකාවක්"},{"en":"candidate","si":"අපේක්ෂකයා"},{"en":"capital","si":"ප්රාග්ධනය"},{"en":"car","si":"මෝටර් රථ"},{"en":"card","si":"කාඩ්පත"},{"en":"care","si":"රැකවරණය"},{"en":"career","si":"වෘත්තීය"},{"en":"carry","si":"රැගෙන යන්න"},{"en":"case","si":"නඩුව"},{"en":"catch","si":"අල්ලා"},{"en":"cause","si":"හේතුව"},{"en":"cell","si":"සෛලය"},{"en":"center","si":"කේන්ද්රය"},{"en":"central","si":"මධ්යම"},{"en":"century","si":"සියවස"},{"en":"certain","si":"සමහර"},{"en":"certainly","si":"නිසැකවම"},{"en":"chair","si":"පුටුව"},{"en":"challenge","si":"අභියෝගය"},{"en":"chance","si":"අවස්ථාවක්"},{"en":"change","si":"වෙනස් කිරීම"},{"en":"character","si":"ස්වභාවය"},{"en":"charge","si":"අයකිරීම"},{"en":"check","si":"චෙක් පත"},{"en":"child","si":"ළමා"},{"en":"choice","si":"තේරීම"},{"en":"choose","si":"තෝරා"},{"en":"church","si":"පල්ලිය"},{"en":"citizen","si":"පුරවැසියා"},{"en":"city","si":"නගරය"},{"en":"civil","si":"සිවිල්"},{"en":"claim","si":"හිමිකම"},{"en":"class","si":"පන්තිය"},{"en":"clear","si":"පැහැදිලිව"},{"en":"clearly","si":"පැහැදිලිව"},{"en":"close","si":"සමීපයි"},{"en":"coach","si":"පුහුණුකරුවා"},{"en":"cold","si":"සීතලයි"},{"en":"collection","si":"එකතු"},{"en":"college","si":"විදුහල"},{"en":"color","si":"වර්ණ"},{"en":"come","si":"එන්න"},{"en":"commercial","si":"වාණිජ"},{"en":"common","si":"පොදු"},{"en":"community","si":"ප්රජාව"},{"en":"company","si":"සමාගම"},{"en":"compare","si":"සංසන්දනය කරන්න"},{"en":"computer","si":"පරිගණක"},{"en":"concern","si":"සැලකිලිමත් වීම"},{"en":"condition","si":"තත්ත්වය"},{"en":"conference","si":"සම්මන්ත්රණය"},{"en":"Congress","si":"කොංග්රසය"},{"en":"consider","si":"සලකා බලන්න"},{"en":"consumer","si":"පාරිභෝගික"},{"en":"contain","si":"අඩංගු"},{"en":"continue","si":"දිගටම"},{"en":"control","si":"පාලනය"},{"en":"cost","si":"පිරිවැය"},{"en":"could","si":"හැකි"},{"en":"country","si":"රට"},{"en":"couple","si":"යුවළක්"},{"en":"course","si":"පාඨමාලාව"},{"en":"court","si":"අධිකරණය"},{"en":"cover","si":"ආවරණය"},{"en":"create","si":"නිර්මාණය කරනවා"},{"en":"crime","si":"අපරාධය"},{"en":"cultural","si":"සංස්කෘතික"},{"en":"culture","si":"සංස්කෘතිය"},{"en":"cup","si":"කුසලාන"},{"en":"current","si":"දැනට"},{"en":"customer","si":"පාරිභෝගික"},{"en":"cut","si":"කපා"},{"en":"dark","si":"අඳුරු"},{"en":"data","si":"දත්ත"},
		{"en":"day","si":"දවස"},{"en":"dead","si":"මිය ගියා"},{"en":"deal","si":"ගනුදෙනුව"},{"en":"death","si":"මරණ"},{"en":"debate","si":"විවාදය"},{"en":"decade","si":"දශකය"},{"en":"decide","si":"තීරණය කරන්න"},{"en":"decision","si":"තීරණ"},{"en":"deep","si":"ගැඹුරු"},{"en":"defense","si":"ආරක්ෂක"},{"en":"degree","si":"උපාධිය"},{"en":"Democrat","si":"ඩිමොක්‍රටික්"},{"en":"democratic","si":"ප්රජාතන්ත්රවාදී"},{"en":"describe","si":"විස්තර කරන්න"},{"en":"design","si":"නිර්මාණ"},{"en":"despite","si":"තිබියදීත්"},{"en":"detail","si":"විස්තර"},{"en":"determine","si":"තීරණය කරන්න"},{"en":"develop","si":"දියුණු කරනවා"},{"en":"development","si":"වර්ධනය"},{"en":"die","si":"මැරෙනවා"},{"en":"difference","si":"වෙනස"},{"en":"different","si":"විවිධ"},{"en":"difficult","si":"දුෂ්කර"},{"en":"dinner","si":"රාත්රී ආහාරය"},{"en":"direction","si":"දිශාව"},{"en":"director","si":"අධ්යක්ෂ"},{"en":"discover","si":"සොයාගන්න"},{"en":"discuss","si":"සාකච්ඡා කරනවා"},{"en":"discussion","si":"සාකච්ඡා"},{"en":"disease","si":"රෝගය"},{"en":"do","si":"කරන්න"},{"en":"doctor","si":"වෛද්යවරයා"},{"en":"dog","si":"බල්ලා"},{"en":"door","si":"දොර"},{"en":"down","si":"පහළ"},{"en":"draw","si":"අදින්න"},{"en":"dream","si":"සිහින"},{"en":"drive","si":"පදවන්න"},{"en":"drop","si":"පහත වැටීම"},{"en":"drug","si":"මත්ද්රව්ය"},{"en":"during","si":"තුළ"},{"en":"each","si":"සෑම"},{"en":"early","si":"මුල්"},{"en":"east","si":"නැගෙනහිර"},{"en":"easy","si":"පහසු"},{"en":"eat","si":"කන්න"},{"en":"economic","si":"ආර්ථීක"},{"en":"economy","si":"ආර්ථිකය"},{"en":"edge","si":"දාරය"},{"en":"education","si":"අධ්යාපන"},{"en":"effect","si":"බලපෑම"},{"en":"effort","si":"උත්සාහය"},{"en":"eight","si":"අට"},{"en":"either","si":"එක්කෝ"},{"en":"election","si":"මැතිවරණ"},{"en":"else","si":"වෙනත්"},{"en":"employee","si":"සේවකයා"},{"en":"end","si":"අවසානය"},{"en":"energy","si":"බලශක්ති"},{"en":"enjoy","si":"භුක්ති විඳින්න"},{"en":"enough","si":"ඇති"},{"en":"enter","si":"ඇතුල් කරන්න"},{"en":"entire","si":"සමස්ත"},{"en":"environment","si":"පරිසරය"},{"en":"environmental","si":"පරිසර"},{"en":"especially","si":"විශේෂයෙන්ම"},{"en":"establish","si":"පිහිටුවීම"},{"en":"even","si":"පවා"},{"en":"evening","si":"සවස"},{"en":"event","si":"සිදුවීම"},{"en":"ever","si":"කවදා හෝ"},{"en":"every","si":"සෑම"},{"en":"everybody","si":"හැමෝම"},{"en":"everyone","si":"හැමෝම"},{"en":"everything","si":"සියල්ල"},{"en":"evidence","si":"සාක්ෂි"},{"en":"exactly","si":"හරියටම"},{"en":"example","si":"උදාහරණයක්"},{"en":"executive","si":"විධායක"},{"en":"exist","si":"පවතිනවා"},{"en":"expect","si":"බලාපොරොත්තු වෙනවා"},{"en":"experience","si":"අත්දැකීමක්"},{"en":"expert","si":"විශේෂඥ"},{"en":"explain","si":"පැහැදිලි කරන්න"},{"en":"eye","si":"ඇස"},{"en":"face","si":"මුහුණ"},{"en":"fact","si":"ඇත්ත"},{"en":"factor","si":"සාධකය"},{"en":"fail","si":"අසාර්ථකයි"},{"en":"fall","si":"වැටෙනවා"},{"en":"family","si":"පවුලක්"},{"en":"far","si":"දුරින්"},{"en":"fast","si":"ඉක්මනින්"},{"en":"father","si":"පියා"},{"en":"fear","si":"බිය"},{"en":"federal","si":"ෆෙඩරල්"},{"en":"feel","si":"දැනෙනවා"},{"en":"feeling","si":"හැඟීම"},
		{"en":"field","si":"ක්ෂේත්රය"},{"en":"fight","si":"සටන් කරනවා"},{"en":"figure","si":"රූපය"},{"en":"fill","si":"පුරවන්න"},{"en":"film","si":"චිත්රපටය"},{"en":"final","si":"අවසාන"},{"en":"finally","si":"අවසාන"},{"en":"financial","si":"මූල්ය"},{"en":"find","si":"සොයාගන්න"},{"en":"fine","si":"හොඳයි"},{"en":"finger","si":"ඇඟිල්ල"},{"en":"finish","si":"අවසන් කරන්න"},{"en":"fire","si":"ගිනි"},{"en":"firm","si":"ස්ථිරයි"},{"en":"first","si":"පලමු"},{"en":"fish","si":"මාළු"},{"en":"five","si":"පහ"},{"en":"floor","si":"මහල"},{"en":"fly","si":"පියාසර කරනවා"},{"en":"focus","si":"අවධානය යොමු කරන්න"},{"en":"follow","si":"අනුගමනය කරන්න"},{"en":"food","si":"ආහාර"},{"en":"foot","si":"පාදය"},{"en":"for","si":"සදහා"},{"en":"force","si":"බලය"},{"en":"foreign","si":"විදේශ"},{"en":"forget","si":"අමතක කරනවා"},{"en":"form","si":"ආකෘතිය"},{"en":"former","si":"හිටපු"},{"en":"forward","si":"ඉදිරියට"},{"en":"four","si":"සිව්"},{"en":"free","si":"නිදහස්"},{"en":"friend","si":"මිතුරා"},{"en":"from","si":"සිට"},{"en":"front","si":"ඉදිරිපස"},{"en":"full","si":"පූර්ණ"},{"en":"fund","si":"අරමුදල"},{"en":"future","si":"අනාගතය"},{"en":"game","si":"ක්රීඩාව"},{"en":"garden","si":"වත්ත"},{"en":"gas","si":"ගෑස්"},{"en":"general","si":"ජනරාල්"},{"en":"generation","si":"පරම්පරාව"},{"en":"get","si":"ලැබෙනවා"},{"en":"girl","si":"ගැහැණු ළමයා"},{"en":"give","si":"දෙනවා"},{"en":"glass","si":"වීදුරු"},{"en":"go","si":"යන්න"},{"en":"goal","si":"ඉලක්කය"},{"en":"good","si":"යහපත"},{"en":"government","si":"ආණ්ඩුව"},{"en":"great","si":"මහා"},{"en":"green","si":"කොළ"},{"en":"ground","si":"බිම"},{"en":"group","si":"සමූහය"},{"en":"grow","si":"වර්ධනය වේ"},{"en":"growth","si":"වර්ධනය"},{"en":"guess","si":"අනුමාන"},{"en":"gun","si":"තුවක්කුව"},{"en":"guy","si":"මිනිහා"},{"en":"hair","si":"හිසකෙස්"},{"en":"half","si":"අඩක්"},{"en":"hand","si":"අත"},{"en":"hang","si":"එල්ලෙනවා"},{"en":"happen","si":"සිදුවේ"},{"en":"happy","si":"සතුටු"},{"en":"hard","si":"අමාරුයි"},{"en":"have","si":"ඇති"},{"en":"he","si":"ඔහු"},{"en":"head","si":"හිස"},{"en":"health","si":"සෞඛ්යය"},{"en":"hear","si":"අහන්න"},{"en":"heart","si":"හදවත"},{"en":"heat","si":"තාපය"},{"en":"heavy","si":"බර"},{"en":"help","si":"උදව්"},{"en":"her","si":"ඇගේ"},{"en":"here","si":"මෙතන"},{"en":"herself","si":"තමා"},{"en":"high","si":"අධි"},{"en":"him","si":"ඔහුව"},{"en":"himself","si":"තමා"},{"en":"his","si":"ඔහුගේ"},{"en":"history","si":"ඉතිහාසය"},{"en":"hit","si":"ගැහුවා"},{"en":"hold","si":"අල්ලාගෙන සිටින්න"},{"en":"home","si":"ගෙදර"},{"en":"hope","si":"බලාපොරොත්තුව"},{"en":"hospital","si":"රෝහල"},{"en":"hot","si":"උණුසුම්"},{"en":"hotel","si":"හෝටල්"},{"en":"hour","si":"පැය"},{"en":"house","si":"නිවස"},{"en":"how","si":"කෙසේද"},{"en":"however","si":"කෙසේ වුවද"},{"en":"huge","si":"විශාල"},{"en":"human","si":"මානව"},{"en":"hundred","si":"සියයක්"},{"en":"husband","si":"ස්වාමිපුරුෂයා"}]
	const rand = getRandomElements(originalArray,10)
	const wordList= rand.map(o=>{
		o.otherLanguageWords = shuffleArray(o.otherLanguageWords)
		return o;
	})
	wordListLength = wordList.length
	
	createQuestionCard(wordList[currentQuestionIndex])
	updateQuestionCountProgress()
	
	$('#preQuizBtn').click(function (e){
		if(currentQuestionIndex>0){
			currentQuestionIndex--;
			createQuestionCard(wordList[currentQuestionIndex])
			updateQuestionCountProgress()
		}
	})
	
	$('#nextQuizBtn').click(function (e){
		
		var passSoundClip = document.getElementById("passSoundClip");
		var failSoundClip = document.getElementById("failSoundClip");
		passSoundClip.pause()
		failSoundClip.pause()
		failSoundClip.currentTime = 0
		passSoundClip.currentTime = 0
		if(currentQuestionIndex<wordList.length-1){
			currentQuestionIndex +=1;
			createQuestionCard(wordList[currentQuestionIndex])
			updateQuestionCountProgress()
		}
		else {
			$('#quizSection').hide()
			$('#resultHeader').text(`You scored ${correctAnswerCount}/${wordListLength}`)
			$('#resultMessage').text(getResultMessage(correctAnswerCount))
			$('#resultSection').show()
			celebrate()
		}
	})
	
	$('#questionCard').on('click','button',function (e){
		
		if(e.target.innerText==wordList[currentQuestionIndex].answer){
			correctAnswerCount++;
			var passSoundClip = document.getElementById("passSoundClip");
			passSoundClip.play();
		}
		else{
			var failSoundClip = document.getElementById("failSoundClip");
			failSoundClip.play();
		}
		[...document.querySelectorAll('#questionCard button')].map(btn=>{
			if(btn.innerText!=wordList[currentQuestionIndex].answer){
				//mute wrong answers
				btn.classList.add('text-gray-700')
				btn.classList.add('text-opacity-50')
				if(btn.dataset.qindex==e.target.dataset.qindex){
					btn.innerHTML = `${btn.innerText}${getWrongIcon()}`
				}
			}
			else {
				btn.innerHTML = `${btn.innerText}${getCorrectIcon()}`
			}
		})
	})
	
	$('#homeButton').click(function (e){
		window.location.reload()
	})
})

function createQuestionCard(cardData){
	const englishWord = cardData.englishWord
	const buttonList = cardData.otherLanguageWords.map((word,index)=>{
		return `<button data-qindex="${index}" class="whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground px-4 py-2 h-10 w-full justify-start text-base flex items-center transition-colors hover:bg-blue-100">
                    ${word}
                    <span class="text-sm text-gray-500 ml-auto"></span>
                </button>`
	})
	
	const cardContent = `<div class="flex flex-col gap-4 p-6">
            <h1 class="text-3xl font-semibold text-center">${englishWord}</h1>
            <div class="grid grid-cols-1 gap-4" style="min-width: 300px;">
            	${buttonList.join('')}
            </div>
        </div>`
	$('#questionCard').html(cardContent)
}

function getWrongIcon(){
	return `<span class="text-sm text-gray-500 ml-auto"></span>
                    <span class="bg-red-500 rounded-full mr-1 p-1">
					  <svg
							  xmlns="http://www.w3.org/2000/svg"
							  width="16"
							  height="16"
							  viewBox="0 0 24 24"
							  fill="none"
							  stroke="currentColor"
							  stroke-width="2"
							  stroke-linecap="round"
							  stroke-linejoin="round"
							  class="text-white"
					  >
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
        			</span>`
}

function getCorrectIcon(){
	return `<span class="text-sm text-gray-500 ml-auto"></span>
                    <span class="bg-green-500 rounded-full mr-1 p-1">
                    	<svg xmlns="http://www.w3.org/2000/svg" width="16"
							height="16" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2"
							stroke-linecap="round" stroke-linejoin="round"
							class="text-white">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
					</span>`
}

function shuffleArray(array) {
	// Function to generate a random number between 0 and 1
	function getRandom() {
		return Math.random() - 0.5;
	}
	
	// Use the sort method with a randomizing function
	array.sort(getRandom);
	return array
}

function updateQuestionCountProgress(){
	$('#questionCountProgress').text(`Question: ${currentQuestionIndex+1}/${wordListLength}`)
}

function celebrate() {
	var soundClip = document.getElementById("tadaSoundClip");
	soundClip.play();
	let duration = 5 * 1000;
	let animationEnd = Date.now() + duration;
	let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
	
	function randomInRange(min, max) {
		return Math.random() * (max - min) + min;
	}
	
	let interval = setInterval(function() {
		let timeLeft = animationEnd - Date.now();
		
		if (timeLeft <= 0) {
			return clearInterval(interval);
		}
		
		let particleCount = 50 * (timeLeft / duration);
		// since particles fall down, start a bit higher than random
		confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
		confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
	}, 250);
}

function getResultMessage(correctAnswerCount){
	const percentage = (correctAnswerCount/wordListLength)*100
	if(percentage<=25){
		return 'Keep practicing! You\'re on the right track.'
	}
	else if(percentage<=50){
		return 'Good effort! You\'re making progress.'
	}
	else if(percentage<=75){
		return 'Well done! You\'re doing great!'
	}
	else{
		return 'Great job! You\'re a true expert. Keep up the good work.'
	}
	
}

function getRandomElements(originalArray, m) {
	const shuffledArray = originalArray.slice().sort(() => Math.random() - 0.5);
	const selectedWords = shuffledArray.slice(0, m);
	
	const wordList = []
	let otherOptionIndex =m
	selectedWords.map(selectedWord=>{
		
		const wordObject = {
			englishWord:selectedWord.en,
			otherLanguageWords:[selectedWord.si,
				shuffledArray[otherOptionIndex+1].si,
				shuffledArray[otherOptionIndex+2].si,
				shuffledArray[otherOptionIndex+3].si
			],
			answer: selectedWord.si
		}
		otherOptionIndex = otherOptionIndex+3
		wordList.push(wordObject)
	})
	
	return wordList
	
}