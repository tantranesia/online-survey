import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {
  Button,
  IconButton,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import { AddCircleOutline } from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function Form() {
  const [question, setQuestion] = useState([]);
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState([]);
  const [form, setForm] = useState([
    {
      question: '',
      title: '',
      description: '',
      answerType: input,
      answerText: '',
      answerDropdown: question,
      required: false,
    },
  ]);
  // Add new option label
  const optionAdd = (e) => {
    setAnswer(e.target.value);
    // console.log(answer, 'cek answer');
  };

  // Add new card
  const addCard = (index) => {
    let card = {
      question: '',
      answerType: input,
      answerText: '',
      answerDropdown: question,
      required: false,
    };
    setForm([{ ...form }, card]);
    console.log(form);
  };

// Add new option in Dropdown 
  const addOption = (e) => {
    let option = answer;
    setQuestion([...question, option]);
    setForm(() => ({ ...form, question }));
    console.log(question);
  };
  
// Change question type Dropdown/Type
  const changeType = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(question);
  };
  useEffect(() => {});
  return (
    <form onSubmit={handleSubmit}>
      <Box
        component="form"
        sx={{ bgcolor: 'white', padding: '30px', marginY: '30px' }}
      >
        <FormControl fullWidth>
          <Stack spacing={5}>
            <TextField
              name="title"
              id="standard-basic"
              label="Untitled Form"
              variant="standard"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            ></TextField>
            <TextField
              name="description"
              id="standard-basic"
              label="Form Description"
              variant="standard"
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            ></TextField>
          </Stack>
        </FormControl>
      </Box>
      {form.length > 0 ? (
        form.map((data, index) => {
          return (
            <Box
              component="form"
              sx={{ bgcolor: 'white', padding: '30px' }}
              key={index}
            >
              <Stack spacing={5}>
                <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                  <TextareaAutosize
                    name="question"
                    placeholder="Your Question"
                    variant="standard"
                    style={{ width: 400 }}
                    minRows={3}
                    onChange={(e) =>
                      setForm({ ...form, question: e.target.value, index })
                    }
                  />
                  <FormControl sx={{ width: 300 }}>
                    <InputLabel id="question-type">Please Choose</InputLabel>
                    <Select
                      labelId="question-type"
                      id="question-type"
                      label="question-type"
                      onChange={changeType}
                    >
                      <MenuItem value={'dropdown'}>Dropdown</MenuItem>
                      <MenuItem value={'text'}>Text</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
                {input === 'text' ? (
                  <TextField
                    name="answerText"
                    label="Enter text"
                    variant="standard"
                    onChange={(e) =>
                      setForm({ ...form, answerText: e.target.value, index })
                    }
                  ></TextField>
                ) : question.length > 0 ? (
                  question.map((col, index) => {
                    return (
                      <Stack
                        direction="row"
                        gap={10}
                        sx={{ alignItems: 'center' }}
                        key={index}
                      >
                        <TextField
                          label="Enter text"
                          variant="standard"
                          fullWidth
                          onChange={optionAdd}
                        />
                        <IconButton onClick={addOption}>
                          <AddCircleOutline
                            sx={{ color: blue[700] }}
                            fontSize="large"
                          />
                        </IconButton>
                      </Stack>
                    );
                  })
                ) : (
                  <Stack
                    direction="row"
                    gap={10}
                    sx={{ alignItems: 'center' }}
                    // key={index}
                  >
                    <TextField
                      label="Enter text"
                      variant="standard"
                      fullWidth
                      onChange={optionAdd}
                    />
                    <IconButton onClick={addOption}>
                      <AddCircleOutline
                        sx={{ color: blue[700] }}
                        fontSize="large"
                      />
                    </IconButton>
                  </Stack>
                )}
              </Stack>
              <Stack
                direction="row"
                gap={2}
                sx={{
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginTop: '20px',
                }}
              >
                <IconButton>
                  <AddCircleOutline
                    fontSize="large"
                    sx={{ color: blue[700] }}
                    onClick={addCard}
                  />
                </IconButton>
                <Divider orientation="vertical" variant="middle" flexItem />
                <FormGroup>
                  <FormControlLabel
                    name="required"
                    control={<Switch checked={form.required} />}
                    label="Required"
                    onChange={(e) =>
                      setForm({ ...form, required: e.target.value, index })
                    }
                  />
                </FormGroup>
              </Stack>
            </Box>
          );
        })
      ) : (
        <Box component="form" sx={{ bgcolor: 'white', padding: '30px' }}>
          <Stack spacing={5}>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <TextareaAutosize
                name="question"
                placeholder="Your Question"
                variant="standard"
                style={{ width: 400 }}
                minRows={3}
                onChange={(e) => setForm({ ...form, question: e.target.value })}
              />
              <FormControl sx={{ width: 300 }}>
                <InputLabel id="question-type">Please Choose</InputLabel>
                <Select
                  labelId="question-type"
                  id="question-type"
                  label="question-type"
                  onChange={changeType}
                >
                  <MenuItem value={'dropdown'}>Dropdown</MenuItem>
                  <MenuItem value={'text'}>Text</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            {input === 'text' ? (
              <TextField
                name="answerText"
                label="Enter text"
                variant="standard"
                onChange={(e) =>
                  setForm({ ...form, answerText: e.target.value })
                }
              ></TextField>
            ) : question.length > 0 ? (
              question.map((col, index) => {
                return (
                  <Stack
                    direction="row"
                    gap={10}
                    sx={{ alignItems: 'center' }}
                    key={index}
                  >
                    <TextField
                      label="Enter text"
                      variant="standard"
                      fullWidth
                      onChange={optionAdd}
                    />
                    <IconButton onClick={addOption}>
                      <AddCircleOutline
                        sx={{ color: blue[700] }}
                        fontSize="large"
                      />
                    </IconButton>
                  </Stack>
                );
              })
            ) : (
              <Stack
                direction="row"
                gap={10}
                sx={{ alignItems: 'center' }}
                // key={index}
              >
                <TextField
                  label="Enter text"
                  variant="standard"
                  fullWidth
                  onChange={optionAdd}
                />
                <IconButton onClick={addOption}>
                  <AddCircleOutline
                    sx={{ color: blue[700] }}
                    fontSize="large"
                  />
                </IconButton>
              </Stack>
            )}
          </Stack>
          <Stack
            direction="row"
            gap={2}
            sx={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <IconButton>
              <AddCircleOutline
                fontSize="large"
                sx={{ color: blue[700] }}
                onClick={addCard}
              />
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem />
            <FormGroup>
              <FormControlLabel
                name="required"
                control={<Switch checked={form.required} />}
                label="Required"
                onChange={(e) => setForm({ ...form, required: e.target.value })}
              />
            </FormGroup>
          </Stack>
        </Box>
      )}
      <Button
        style={{
          borderRadius: 35,
          backgroundColor: '#21b6ae',
          padding: '10px 30px',
          fontSize: '18px',
          marginTop: '20px',
        }}
        variant="contained"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default Form;
