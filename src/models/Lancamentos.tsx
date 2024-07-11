export interface Lancamento {
    id?: number;
    forncecedor: string;
    descricao: string;
    valor: number;
    dataVencimento: Date;
    dataPagamento?: Date;
};
