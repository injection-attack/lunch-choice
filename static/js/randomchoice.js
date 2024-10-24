const 대신버튼 = document.querySelector('.random-choice')
  대신버튼.addEventListener('click', ()=>{
    const randomMenuArray = ['김밥', '라면', '돈까스', '비빔밥', '짜장면', '덮밥', '스시', '회', '육회', '족발', '파스타', '보쌈', '칼국수', '쫄면', '마라탕', '기계에 의존하는 인간에게 영양은 사치다. 굶기.']
    
    function getRandomElements(arr, n) {
      const result = [];
      const copyArr = [...arr];  
      
      while(result.length < n && copyArr.length > 0) {        
        const randomIndex = Math.floor(Math.random() * copyArr.length);    
        result.push(copyArr[randomIndex]);
        copyArr.splice(randomIndex, 1);
      }
      
      return result;
    }

    let result = getRandomElements(randomMenuArray, 5) //randomMenuArray에서 5개 랜덤추출
    const form = document.querySelector('#inputContainer')
    form.innerHTML=`
      <input class="list" type="text" name="items" value="${result[0]}" required>
      <input class="list" type="text" name="items" value="${result[1]}" required>
      <input class="list" type="text" name="items" value="${result[2]}" required>
      <input class="list" type="text" name="items" value="${result[3]}" required>
      <input class="list" type="text" name="items" value="${result[4]}" required>
      `

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const 뽑기횟수입력칸 = document.querySelector('.뽑기횟수')
    뽑기횟수입력칸.value = getRandomInt(1, 100000)

  })