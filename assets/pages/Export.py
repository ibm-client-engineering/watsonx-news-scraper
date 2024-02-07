import sys
 
# setting path
#sys.path.append('../assets')
import pandas as pd
import streamlit as st
from Webscraper_tools.Webscrape import *
from Webscraper_tools.Watsonx_connection import run_llm

def run_pre_export(df) :
   st.session_state['pre_export_run'] = True
   with st.spinner('Running Watson:blue[x]'):
      run_llm(df)

@st.cache_resource
def convert_df(df):
    # IMPORTANT: Cache the conversion to prevent computation on every rerun
    return df.to_csv().encode('utf-8')

df = do_webscrape()
num_articles, _ = df.shape

st.title("Export News Analysis to CSV")
st.caption(f"There are {num_articles} articles in the database")

if 'pre_export_run' not in st.session_state :
   st.session_state['pre_export_run'] = False

if st.session_state['pre_export_run'] :
   csv = convert_df(df)
   st.download_button(
    label="Download data as CSV",
    data=csv,
    file_name='news_analysis.csv',
    mime='text/csv',
   )
else :
   st.button("Run Analysis for export", on_click=run_pre_export, args=(df,))
   
