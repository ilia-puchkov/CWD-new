import RequestFormat from '../models/RequestFormat'

class Api {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  // Check res
  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`We have an error ${res.status}`)
  }

  // Get All requests
  getRequests() {
    return fetch(this._url + '/answers', {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse)
  }

  //Добавление карточки
  addRequest(answerData: RequestFormat) {
    return fetch(this._url + '/answers', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: answerData.name,
        phone: answerData.phone,
        question1: answerData.question1 || '',
        question2: answerData.question2 || '',
        question3: answerData.question3 || '',
        question4: answerData.question4 || '',
        question5: answerData.question5 || '',
        question6: answerData.question6 || '',
      }),
    }).then(this._checkResponse)
  }
}

const cwdApi = new Api({
  url: 'http://localhost:5500',
  headers: {
    'content-type': 'application/json',
  },
})

export { Api, cwdApi }
