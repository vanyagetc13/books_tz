import React from "react";
import styles from "./ErrorCatcher.module.scss";
import errors from "./../../store/errors";
import { observer } from "mobx-react-lite";

const ErrorCatcher = observer(() => {
	return (
		<div className={styles.wrapper} data-testid="error_catcher">
			{errors.errors.map((error) => (
				<div key={error.id.toString()} className={styles.error}>
					<h5>Code: {error.code}</h5>
					<div>{error.text}</div>
					<div
						className={styles.close}
						onClick={() => {
							errors.deleteError(error.id);
						}}
					>
						X
					</div>
				</div>
			))}
		</div>
	);
});

export default ErrorCatcher;
