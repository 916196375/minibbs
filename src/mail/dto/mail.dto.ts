/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-02-13 22:32:27
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-02-21 17:17:05
 * @FilePath: \minibbs\src\mail\dto\mail.dto.ts
 * @Description: mailDTO
 */

import { IsString } from "class-validator";
import { Mail } from "../entities/mail.entity";

export class CreateMailDto {
    @IsString()
    postUid: number

    @IsString()
    reciveUid: number

    @IsString()
    title: string

    @IsString()
    content: string

    @IsString()
    aid?: string

}

/**
 * @Api mail/delteAll
 */
export interface ListMailDto {
    uid: string
    pageNum: number
    pageSize: number
}

type OmitMailFieldsForListMailReturnDto = 'aid' | 'content' | 'createTime' | 'mid' | 'title'

/**
 * @Api mail/delteAll
 */
export interface ListMailReturnDto extends Pick<Mail, OmitMailFieldsForListMailReturnDto> {
    postUsername: string
}
