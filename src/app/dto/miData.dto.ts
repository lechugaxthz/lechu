import { IsObject, IsString } from "class-validator";


export class MiDataDto {

    @IsString()
    name: string = '';

    @IsString()
    nickName: string = '';

    @IsString()
    designation: string = '';

    @IsString()
    img: string = '';

    @IsObject()
    socialMedia: {
        telegramLink: string,
        whatsAppLink: string,
        instagramLink: string,
        gitHubLink: string,
        linkedInLink: string
    } = {
            telegramLink: '',
            whatsAppLink: '',
            instagramLink: '',
            gitHubLink: '',
            linkedInLink: ''
        };

    @IsString()
    mail: string = '';

}