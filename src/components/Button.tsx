import React,{useState} from 'react';

interface ButtonProps {
    text?:string;
    onClick?:()=>void;
    variant?:'primary'|'secondary'|'danger';
    size?:'small'|'medium'|'large';
    disabled?:boolean;
}

export const Button: React.FC<ButtonProps> = ({
    text='Button',
    onClick=()=>{},
    variant='primary',
    size='medium',
    disabled=false,
}) => {
    const [isHovered,setIsHovered]=useState(false);
    
    const getButtonStyle = () => {
        let style:Record<string,string> = {};
        
        // Базовые стили
        style = {
            padding: size === 'small' ? '4px 8px' : size === 'medium' ? '8px 16px' : '12px 24px',
            borderRadius: '4px',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? '0.7' : '1',
            transition: 'all 0.2s ease',
            fontWeight: 'bold',
            border: 'none',
            outline: 'none',
        };
        
        // Стили для разных вариантов
        if(variant==='primary'){
            style.backgroundColor = isHovered ? '#0056b3' : '#007bff';
            style.color = '#ffffff';
        }else if(variant==='secondary'){
            style.backgroundColor = isHovered ? '#5a6268' : '#6c757d';
            style.color = '#ffffff';
        }else if(variant==='danger'){
            style.backgroundColor = isHovered ? '#c82333' : '#dc3545';
            style.color = '#ffffff';
        }
        
        return style;
    };
    
    return (
        <button
            style={getButtonStyle()}
            onClick={onClick}
            disabled={disabled}
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
        >
            {text}
        </button>
    );
};

export default Button;
