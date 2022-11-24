import { IsNotEmpty } from 'class-validator';

export class ConfigEntityDto {
  @IsNotEmpty()
  input_num: string;

  @IsNotEmpty()
  input_text: string;
}
