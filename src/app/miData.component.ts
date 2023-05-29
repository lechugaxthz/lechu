import { MiDataDto } from "./dto/miData.dto";

let thisImg = new Image()

export const miData: MiDataDto = {
    name: 'Lautaro Garcia',
    nickName: 'Lechugaxthz',
    designation: 'Full-Stack Developer',
    img: thisImg.src = '../../assets/img/profileIMG.jpg',
    mail: `lautarogonzalogarcia@outlook.com`,
    socialMedia: {
        telegramLink: `https://t.me/Lechgaxthz`,
        whatsAppLink: `https://wa.me/+541161696120`,
        instagramLink: `https://www.instagram.com/lechugaxthz/`,
        gitHubLink: `https://github.com/lechugaxthz`,
        linkedInLink: `https://www.linkedin.com/in/garcialautaro/`
    }
}