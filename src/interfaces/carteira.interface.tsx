export interface ICarteira {
    id: number;
    user_id: number;
    numero: number;
    titular: string;
    saldo: number;
    valorNegativo: number;
    created_at: string
}