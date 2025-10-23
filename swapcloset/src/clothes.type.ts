export interface Roupa {
  id: number;         
  tipoRoupa: string;  
  tamanho: string;    
  descricao: string;    
  preco: number;      
  disponivel: boolean; 
  selecionado: boolean; 
}

export const tiposRoupas: string[] = [
  'Camiseta',
  'Calça',
  'Jaqueta',
  'Vestido',
  'Shorts',
  'Saia',
  'Blusa',
  'Sapato'
];
