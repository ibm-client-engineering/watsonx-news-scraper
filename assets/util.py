#Helper Functions
def remove_formatting(str) :
    return ''.join(s for s in str if ord(s)>31 and ord(s)<126).replace("   ", "").replace("$", "\$")

def update_row_with_dict(df,d,idx):
    df.loc[idx,d.keys()] = d.values()