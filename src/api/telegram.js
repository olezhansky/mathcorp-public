import axios from 'axios'

const sendMessageTotelegram = (value) => {
    const token = '2001672143:AAHVSv7FC8LmdlEsNkvBTrRQBaBziuTGmvw'
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=-594260092&text=${value}`;
    return axios.get(url)
}

export default sendMessageTotelegram