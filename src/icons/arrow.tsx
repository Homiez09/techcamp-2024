import React from 'react';
import type { SVGProps } from 'react';

export function MakiArrow({ color, className }: { color: string, className?: string }) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 15 15" className={className}><path fill={color} d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"></path></svg>);
}

export function MdiTriangle({ color, className }: { color: string, className?: string }) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 24 24" className={className}><path fill={color} d="M1 21h22L12 2"></path></svg>);
}

export function BiArrowUpShort({ color, className }: { color: string, className?: string }) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 16 16" className={className}><path fill={color} fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"></path></svg>);
}