import Board from "./Board"
import * as React from 'react'
import user from '@testing-library/user-event'
import {render, screen, waitFor} from '@testing-library/react'

const checkMakesActiveThenInactive = async () => {
  await waitFor(() => {
    expect(screen.queryAllByTitle('cell-active').length).toBe(1)
  });  
  await waitFor(() => {
    expect(screen.queryAllByTitle('cell-active').length).toBe(0)
  });   
}

test('loads and displays correct text', async () => {
  render(<Board />)
  expect(screen.getByText('Memory Game')).toBeInTheDocument()
  expect(screen.getByText('Play')).toBeInTheDocument()
  expect(screen.getByText('Difficulty:')).toBeInTheDocument()
  expect(screen.getAllByTitle('cell-inactive').length).toBe(6)
  expect(screen.queryAllByTitle('cell-active').length).toBe(0)
})

test('loads with correct difficulty and makes cells active in turns', async () => {
  const DEFAULT_DIFFICULTY = 3;
  render(<Board />)

  await user.click(screen.getByText('Play'))

  for(let i=0; i<DEFAULT_DIFFICULTY; i++){
    checkMakesActiveThenInactive()
  }
})


test('changing difficulty works', async () => {
  render(<Board />)

  user.selectOptions(
    screen.getByRole('combobox'),
    screen.getByRole('option', {name: '5'}),
  )

  await user.click(screen.getByText('Play'))


  for(let i=0; i<5; i++){
    await checkMakesActiveThenInactive()
  }  

  user.selectOptions(
    screen.getByRole('combobox'),
    screen.getByRole('option', {name: '2'}),
  )

  await user.click(screen.getByText('Play'))


  for(let i=0; i<2; i++){
    await checkMakesActiveThenInactive()
  }   
})

