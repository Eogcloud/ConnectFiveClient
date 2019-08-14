import { take, put, select } from 'redux-saga/effects';
import axios from 'axios'
import * as mutations from './mutations'

const backendUrl = "http://localhost:8888"

export function* boardChangeSage() {
	while (true) {
		const board = yield take([
			mutations.SET_BOARD
		]);
		axios.post(backendUrl + `/game/update`, {
			task: {
				id: task.taskId,
				group: task.groupId,
				name: task.name,
				isComplete: false,
			}
		})
	}
}