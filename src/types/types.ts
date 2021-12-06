export type PostElementType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: PhotosType,
    status: string,
    followed: boolean
}
export type DialogType = {
    id?: number
    name: string
}

export type MessageType = {
    id?: number
    message: string
}

export type DialogPageType = {
    messagesData: Array<MessageType>,
    dialogData: Array<DialogType>
}