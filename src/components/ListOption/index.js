import React from 'react';

import * as S from './styles';

function ListOption({ children }) {
	return (
		<S.Opcoes>
			{children}
		</S.Opcoes>
	);
}

export default ListOption;