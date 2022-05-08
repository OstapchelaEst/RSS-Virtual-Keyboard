document.addEventListener('DOMContentLoaded', () => {

   document.body.innerHTML = `
   <div class="wrapper">
      <section class="info">
            <p>Клавиатура создавалась на WIndows 10</p>
            <p>Комбинация для перключения языка Shift + ALt</p>
      </section>

      <section class="text">
         <textarea class="text__place"></textarea>
      </section>

      <section class="keyboard"> 
      </section>  
   </div>
`

   const textPlace = document.querySelector('.text__place');
   const keyboardBlock = document.querySelector('.keyboard');

   const [enKeyBoardSimbols, ruKeyBoardSimbols] = [
      [
         [96, 126, 'noCaps'],
         [49, 33, 'noCaps'],
         [50, 64, 'noCaps'],
         [51, 35, 'noCaps'],
         [52, 36, 'noCaps'],
         [53, 37, 'noCaps'],
         [54, 94, 'noCaps'],
         [55, 38, 'noCaps'],
         [56, 42, 'noCaps'],
         [57, 40, 'noCaps'],
         [48, 41, 'noCaps'],
         [45, 95, 'noCaps'],
         [61, 43, 'noCaps'],
         {
            'code': 'Backspace',
            'name': 'Back Spase',
            'class': 'two',
         },
         {
            'code': 'Tab',
            'name': 'Tab',
         },
         [113, 81,],
         [119, 87,],
         [101, 69,],
         [114, 82,],
         [116, 84,],
         [121, 89,],
         [117, 85,],
         [105, 73,],
         [111, 79,],
         [112, 80,],
         [91, 123,],
         [93, 125,],
         [92, 124,],
         {
            'code': 'Delete',
            'name': 'Del',
            'class': 'del',
         },
         {
            'code': 'CapsLock',
            'name': 'Caps Lock',
            'class': 'two capsLock',
         },
         [97, 65],
         [115, 83],
         [100, 68],
         [102, 70],
         [103, 71],
         [104, 72],
         [106, 74],
         [107, 75],
         [108, 76],
         [59, 58],
         [39, 34],
         {
            'code': 13,
            'name': 'Enter',
            'class': 'two',
         },


         {
            'code': 'ShiftLeft',
            'name': 'Shift',
            'class': 'two Shift',
         },
         [122, 90],
         [120, 88],
         [99, 67],
         [118, 86],
         [98, 66],
         [110, 78],
         [109, 77],
         [44, 60],
         [46, 62],
         [47, 63],
         {
            'code': 'ArrowUp',
            'name': '▲',
            'class': 'ArrowUp',
         },
         {
            'code': 'ShiftRight',
            'name': 'Shift',
            'class': 'two Shift',
         },



         {
            'code': 'ControlLeft',
            'name': 'Ctrl',
            'class': 'ctrl',
         },
         {
            'code': 'MetaLeft',
            'name': 'Win',
            'class': 'MetaLeft',
         },
         {
            'code': 'AltLeft',
            'name': 'Alt',
            'class': 'alt',
         },
         {
            'code': 'Space',
            'name': 'Space',
            'class': 'space',
         },
         {
            'code': 'AltRight',
            'name': 'Alt',
            'class': 'alt',
         },
         {
            'code': 'ArrowLeft',
            'name': '◄',
            'class': 'ArrowLeft',
         },
         {
            'code': 'ArrowDown',
            'name': '▼',
            'class': 'ArrowDown',
         },
         {
            'code': 'ArrowRight',
            'name': '►',
            'class': 'ArrowRight',
         },
         {
            'code': 'ControlRight',
            'name': 'Ctrl',
            'class': 'ctrl',
         },
      ],
      [
         [1105, 1025, 'noCaps'],
         [49, 33, 'noCaps'],
         [50, 34, 'noCaps'],
         [51, 8470, 'noCaps'],
         [52, 59, 'noCaps'],
         [53, 37, 'noCaps'],
         [54, 58, 'noCaps'],
         [55, 63, 'noCaps'],
         [56, 42, 'noCaps'],
         [57, 40, 'noCaps'],
         [48, 41, 'noCaps'],
         [45, 95, 'noCaps'],
         [61, 43, 'noCaps'],
         {
            'code': 'Backspace',
            'name': 'Back Spase',
            'class': 'two',
         },
         {
            'code': 'Tab',
            'name': 'Tab',
         },
         [1081, 1049],
         [1094, 1062],
         [1091, 1059],
         [1082, 1050],
         [1077, 1045],
         [1085, 1053],
         [1075, 1043],
         [1096, 1064],
         [1097, 1065],
         [1079, 1047],
         [1093, 1061],
         [1098, 1066],
         [92, 47],
         {
            'code': 'Delete',
            'name': 'Del',
            'class': 'del',
         },
         {
            'code': 'CapsLock',
            'name': 'Caps Lock',
            'class': 'two capsLock',
         },
         [1092, 1060],
         [1099, 1067],
         [1074, 1042],
         [1072, 1040],
         [1087, 1055],
         [1088, 1056],
         [1086, 1054],
         [1083, 1051],
         [1076, 1044],
         [1078, 1046],
         [1101, 1069],
         {
            'code': 13,
            'name': 'Enter',
            'class': 'two',
         },


         {
            'code': 'ShiftLeft',
            'name': 'Shift',
            'class': 'two Shift',
         },
         [1103, 1071],
         [1095, 1063],
         [1089, 1057],
         [1084, 1052],
         [1080, 1048],
         [1090, 1058],
         [1100, 1068],
         [1073, 1041],
         [1102, 1070],
         [46, 44],
         {
            'code': 'ArrowUp',
            'name': '▲',
            'class': 'ArrowUp',
         },
         {
            'code': 'ShiftRight',
            'name': 'Shift',
            'class': 'two Shift',
         },



         {
            'code': 'ControlLeft',
            'name': 'Ctrl',
            'class': 'ctrl',
         },
         {
            'code': 'MetaLeft',
            'name': 'Win',
            'class': 'MetaLeft',
         },
         {
            'code': 'AltLeft',
            'name': 'Alt',
            'class': 'alt',
         },
         {
            'code': 'Space',
            'name': 'Space',
            'class': 'space',
         },
         {
            'code': 'AltRight',
            'name': 'Alt',
            'class': 'alt',
         },
         {
            'code': 'ArrowLeft',
            'name': '◄',
            'class': 'ArrowLeft',
         },
         {
            'code': 'ArrowDown',
            'name': '▼',
            'class': 'ArrowDown',
         },
         {
            'code': 'ArrowRight',
            'name': '►',
            'class': 'ArrowRight',
         },
         {
            'code': 'ControlRight',
            'name': 'Ctrl',
            'class': 'ctrl',
         },
      ]
   ]
   let hoyLanguage = 'en';
   if (localStorage.getItem('setLang')) {
      hoyLanguage = localStorage.getItem('setLang');
   }
   createKeyBoard();
   function createKeyBoard() {
      keyboardBlock.innerHTML = ``;
      let language = '';
      if (hoyLanguage == 'en') {
         language = enKeyBoardSimbols;
      }
      else if (hoyLanguage == 'ru') {
         language = ruKeyBoardSimbols;
      }
      for (const item of language) {
         if (Array.isArray(item)) {
            keyboardBlock.innerHTML += `
         <div class="keyboard__key${item[2] ? " " + item[2] : ''}" data-key ="${item[0]}" data-keyShift ="${item[1]}">
            <div class="keyboard__shift">${String.fromCharCode(item[1])}</div>
            <div class="keyboard__unShift">${String.fromCharCode(item[0])}</div>
            
         </div>
         `
         }
         else {
            keyboardBlock.innerHTML += `
         <div class="keyboard__key ${item.class ? item.class : ''}" data-key ="${item.code}">
            <div class="keyboard__button">${item.name}</div>
         </div>
         `
         }
      }
   }

   function getCursorPosition(str) {
      let position = 0;
      if (document.selection) {
         str.focus();
         let Sel = document.selection.createRange();
         Sel.moveStart('character', -str.value.length);
         position = Sel.text.length;
      } else if (str.selectionStart || str.selectionStart == '0') {
         position = str.selectionStart;
      }
      return position;
   }

   document.addEventListener('keypress', (e) => {
      textPlace.focus()
      const keyDown =
         (document.querySelector(`.keyboard__key[data-key="${e.keyCode}"]`)) ||
         (document.querySelector(`.keyboard__key[data-keyShift="${e.keyCode}"]`));
      if (keyDown) {
         keyDown.classList.add('active')
         setTimeout(() => {
            keyDown.classList.remove('active')
         }, 150)
      }
   })

   document.addEventListener('keydown', (e) => {
      textPlace.focus()
      if (e.shiftKey && e.altKey) {
         if (hoyLanguage == 'en') {
            hoyLanguage = 'ru'
         }
         else {
            hoyLanguage = 'en'
         }
         createKeyBoard();
         localStorage.setItem('setLang', hoyLanguage);
      }

      if (e.code == 'ArrowUp') {
         e.preventDefault()
         document.querySelector('.keyboard__key[data-key="ArrowUp"]').classList.add('active');
         const placeCursor = getCursorPosition(textPlace);
         textPlace.value = (textPlace.value).slice(0, placeCursor) + '▲' + (textPlace.value).slice(placeCursor);
         textPlace.setSelectionRange(placeCursor + 1, placeCursor + 1);
      }
      if (e.code == 'ArrowLeft') {
         e.preventDefault()
         document.querySelector('.keyboard__key[data-key="ArrowLeft"]').classList.add('active');
         const placeCursor = getCursorPosition(textPlace);
         textPlace.value = (textPlace.value).slice(0, placeCursor) + '◄' + (textPlace.value).slice(placeCursor);
         textPlace.setSelectionRange(placeCursor + 1, placeCursor + 1);
      }
      if (e.code == 'ArrowDown') {
         e.preventDefault()
         document.querySelector('.keyboard__key[data-key="ArrowDown"]').classList.add('active');
         const placeCursor = getCursorPosition(textPlace);
         textPlace.value = (textPlace.value).slice(0, placeCursor) + '▼' + (textPlace.value).slice(placeCursor);
         textPlace.setSelectionRange(placeCursor + 1, placeCursor + 1);
      }
      if (e.code == 'ArrowRight') {
         e.preventDefault()
         document.querySelector('.keyboard__key[data-key="ArrowRight"]').classList.add('active');
         const placeCursor = getCursorPosition(textPlace);
         textPlace.value = (textPlace.value).slice(0, placeCursor) + '►' + (textPlace.value).slice(placeCursor);
         textPlace.setSelectionRange(placeCursor + 1, placeCursor + 1);
      }

      if (e.code == 'Delete') {
         document.querySelector('.keyboard__key[data-key="Delete"]').classList.add('active');
      }

      if (e.code == 'Backspace') {
         document.querySelector('.keyboard__key[data-key="Backspace"]').classList.add('active');
      }

      if (e.code == 'Space') {
         document.querySelector('.keyboard__key[data-key="Space"]').classList.add('active');
      }

      if (e.code == 'Tab') {
         e.preventDefault();
         const placeCursor = getCursorPosition(textPlace);
         textPlace.value = (textPlace.value).slice(0, placeCursor) + "   " + (textPlace.value).slice(placeCursor);
         textPlace.setSelectionRange(placeCursor + 3, placeCursor + 3);
         document.querySelector('.keyboard__key[data-key="Tab"]').classList.add('active');
      }

      if (e.key == "CapsLock") {
         document.querySelector('.capsLock').classList.toggle('active');
         keyboardBlock.classList.toggle('capslock');
      }

      if (e.code == "MetaLeft") {
         e.preventDefault();
         document.querySelector('.keyboard__key[data-key="MetaLeft"]').classList.add('active');

      }

      if (e.shiftKey && !keyboardBlock.classList.contains('shift')) {
         keyboardBlock.classList.add('shift');
         document.querySelector(`.keyboard__key[data-key="${e.code}"]`).classList.add('active');
      }

      if (e.ctrlKey && !keyboardBlock.classList.contains('ctrl')) {
         e.preventDefault()
         keyboardBlock.classList.add('ctrl');
         document.querySelector(`.keyboard__key[data-key="${e.code}"]`).classList.add('active');
      }

      if (e.altKey && !keyboardBlock.classList.contains('alt')) {
         e.preventDefault()
         keyboardBlock.classList.add('alt');
         document.querySelector(`.keyboard__key[data-key="${e.code}"]`).classList.add('active');
      }

      if (keyboardBlock.classList.contains('shift') && keyboardBlock.classList.contains('capslock')) {
         keyboardBlock.classList.add('shift-caps');
      }
   })

   document.addEventListener('keyup', (e) => {
      if (!e.shiftKey) {
         keyboardBlock.classList.remove('shift');
         keyboardBlock.classList.remove('shift-caps');
         document.querySelectorAll('.Shift').forEach(element => {
            element.classList.remove('active')
         });
      }
      if (!e.ctrlKey) {
         keyboardBlock.classList.remove('ctrl');
         document.querySelectorAll('.ctrl').forEach(element => {
            element.classList.remove('active')
         });
      }
      if (!e.altKey) {
         keyboardBlock.classList.remove('alt');
         document.querySelectorAll('.alt').forEach(element => {
            element.classList.remove('active')
         });
      }
      document.querySelector('.keyboard__key[data-key="Delete"]').classList.remove('active');
      document.querySelector('.keyboard__key[data-key="Tab"]').classList.remove('active');
      document.querySelector('.keyboard__key[data-key="Space"]').classList.remove('active');
      document.querySelector('.keyboard__key[data-key="Backspace"]').classList.remove('active');
      document.querySelector('.keyboard__key[data-key="ArrowUp"]').classList.remove('active');
      document.querySelector('.keyboard__key[data-key="ArrowLeft"]').classList.remove('active');
      document.querySelector('.keyboard__key[data-key="ArrowDown"]').classList.remove('active');
      document.querySelector('.keyboard__key[data-key="ArrowRight"]').classList.remove('active');
      document.querySelector('.keyboard__key[data-key="MetaLeft"]').classList.remove('active');

   })

   keyboardBlock.addEventListener('mousedown', (e) => {
      e.preventDefault()
      if (e.target.classList.contains('keyboard__key')) {
         let keyClick = '';
         if (keyboardBlock.classList.contains('shift-caps') || keyboardBlock.classList.contains('capslock') || keyboardBlock.classList.contains('shift')) {
            keyClick = e.target.getAttribute('data-keyshift');
            if (!keyClick) {
               keyClick = e.target.getAttribute('data-key');
            }
         } else {
            keyClick = e.target.getAttribute('data-key');
         }

         if (!(keyClick == 'CapsLock')) e.target.classList.add('active');
      
         if (keyClick == 'Space') {
            const placeCursor = getCursorPosition(textPlace);
            textPlace.value = (textPlace.value).slice(0, placeCursor) + ' ' + (textPlace.value).slice(placeCursor,);
            textPlace.setSelectionRange(placeCursor + 1, placeCursor + 1);
         }
         else if (keyClick == 'Backspace') {
            const placeCursor = getCursorPosition(textPlace);
            const newPlaceCursor = (placeCursor - 1) < 0 ? 0 : placeCursor - 1;
            textPlace.value = (textPlace.value).slice(0, newPlaceCursor) + (textPlace.value).slice(placeCursor);
            textPlace.setSelectionRange(newPlaceCursor, newPlaceCursor);
         }
         else if (keyClick == 'Delete') {
            const placeCursor = getCursorPosition(textPlace);
            const newPlaceCursor = (placeCursor + 1) <= textPlace.value.length ? placeCursor + 1 : placeCursor;
            textPlace.value = (textPlace.value).slice(0, placeCursor) + (textPlace.value).slice(newPlaceCursor);
            textPlace.setSelectionRange(placeCursor, placeCursor);
         }
         else if (keyClick == 'CapsLock') {
            document.querySelector('.capsLock').classList.toggle('active');
            keyboardBlock.classList.toggle('capslock');
            return
         }
         else if (keyClick == 'Tab') {
            const placeCursor = getCursorPosition(textPlace);
            const newPlaceCursor = placeCursor + 3;
            textPlace.value = (textPlace.value).slice(0, placeCursor) + "   " + (textPlace.value).slice(placeCursor);
            textPlace.setSelectionRange(newPlaceCursor, newPlaceCursor);

         }
         else if (e.target.classList.contains('Shift')) {
            keyboardBlock.classList.add('shift')
            document.querySelector(`.keyboard__key[data-key="${keyClick}"]`).classList.add('active');
            if (keyboardBlock.classList.contains('shift') && keyboardBlock.classList.contains('capslock')) {
               keyboardBlock.classList.add('shift-caps')
            }
            
         }
         else if (keyClick == 'ArrowUp') {
            const placeCursor = getCursorPosition(textPlace);
            textPlace.value = (textPlace.value).slice(0, placeCursor) + '▲' + (textPlace.value).slice(placeCursor);
            textPlace.setSelectionRange(placeCursor + 1, placeCursor + 1);
         }
         else if (keyClick == 'ArrowLeft') {
            const placeCursor = getCursorPosition(textPlace);
            textPlace.value = (textPlace.value).slice(0, placeCursor) + '◄' + (textPlace.value).slice(placeCursor);
            textPlace.setSelectionRange(placeCursor + 1, placeCursor + 1);
         }
         else if (keyClick == 'ArrowDown') {
            const placeCursor = getCursorPosition(textPlace);
            textPlace.value = (textPlace.value).slice(0, placeCursor) + '▼' + (textPlace.value).slice(placeCursor);
            textPlace.setSelectionRange(placeCursor + 1, placeCursor + 1);
         }
         else if (keyClick == 'ArrowRight') {
            const placeCursor = getCursorPosition(textPlace);
            textPlace.value = (textPlace.value).slice(0, placeCursor) + '►' + (textPlace.value).slice(placeCursor);
            textPlace.setSelectionRange(placeCursor + 1, placeCursor + 1);
         }
         else {
            const placeCursor = getCursorPosition(textPlace);
            textPlace.value = (textPlace.value).slice(0, placeCursor) + String.fromCharCode(keyClick) + (textPlace.value).slice(placeCursor);
            textPlace.setSelectionRange(placeCursor + 1, placeCursor + 1);
         }

         setTimeout(() => {
            e.target.classList.remove('active');
            keyboardBlock.classList.remove('shift');
            keyboardBlock.classList.remove('shift-caps')
         }, 200)
      }
   })

})

