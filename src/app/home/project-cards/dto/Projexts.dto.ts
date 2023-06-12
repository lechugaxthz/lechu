export class MyProjectsDto {

    id: number = 0

    theme: string = ''

    name: string = ''

    summary: string = ''

    about: string = ''

    img: string = ''

    carriedOut: string = 'In Progres'

    link?: string | null = null;

    team: { img: string, url: string }[] = [{ img: '', url: '' }]

}